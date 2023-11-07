'use strict';
const os = require('os');
const { filterCommentInLines } = require('./filter/filterCommentInLines');
const { filterCommentLines } = require('./filter/filterCommentLines');
const { filterEmptyLines } = require('./filter/filterEmptyLines');
const { parseValue } = require('./parseValue');
const { removeQuotationMarks } = require('./filter/removeQuotationMarks');
const { replaceNestedChars } = require('./replaceNestedChars');

/**
 * This function parse the environment file to an Object
 *
 * @function parseEnvironmentFileString
 *
 * @param {string} environmentString
 * @returns {object} **parsed environment variables**
 */
const parseEnvironmentFileString = (environmentString) => {
    const env = {};
    const environmentFileArray = environmentString.split(os.EOL);
    const parseFilterEmptyLines = filterEmptyLines(environmentFileArray);
    const parseFilterCommentLines = filterCommentLines(parseFilterEmptyLines);

    parseFilterCommentLines.filter((val) => {
        const splitVal = val.split('=');
        splitVal[0] = removeQuotationMarks(splitVal[0]);
        splitVal[1] = removeQuotationMarks(splitVal[1]);

        const match = splitVal[1].matchAll(/\${[A-Z_]+}/g);
        const arrayFromMatch = [...match];
        if (arrayFromMatch.length > 0) {
            if (arrayFromMatch.length === 1) {
                splitVal[1] = replaceNestedChars(arrayFromMatch[0][0], splitVal[1], env);
            } else {
                arrayFromMatch.forEach((val) => {
                    splitVal[1] = replaceNestedChars(val[0], splitVal[1], env);
                });
            }
        }

        splitVal[1] = parseValue(splitVal[1]);
        splitVal[1] = filterCommentInLines(splitVal[1]);
        splitVal[0] = splitVal[0].trim();
        if (typeof splitVal[1] === 'string') {
            splitVal[1].trim();
        }

        env[splitVal[0]] = splitVal[1];
    });

    return env;
};

module.exports = { parseEnvironmentFileString };
