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
 * @param {string} environmentString - The environment file content as string
 * @returns {object} **parsed environment variables**
 */
const parseEnvironmentFileString = (environmentString) => {
    if (typeof environmentString !== 'string') {
        throw new Error('parseEnvironmentFileString expects a string parameter');
    }
    
    const env = {};
    const environmentFileArray = environmentString.split(os.EOL);
    const parseFilterEmptyLines = filterEmptyLines(environmentFileArray);
    const parseFilterCommentLines = filterCommentLines(parseFilterEmptyLines);

    parseFilterCommentLines.filter((val) => {
        const firstEquals = val.indexOf('=');
        if (firstEquals === -1) return false; // Skip lines without =
        
        const key = val.substring(0, firstEquals);
        let value = val.substring(firstEquals + 1);
        
        const cleanKey = removeQuotationMarks(key.trim());
        const originalValue = value;
        value = removeQuotationMarks(value);

        // Updated regex to support lowercase, uppercase, numbers and underscores
        const match = value.matchAll(/\${[A-Za-z_][A-Za-z0-9_]*}/g);
        const arrayFromMatch = [...match];
        if (arrayFromMatch.length > 0) {
            if (arrayFromMatch.length === 1) {
                value = replaceNestedChars(arrayFromMatch[0][0], value, env);
            } else {
                arrayFromMatch.forEach((matchItem) => {
                    value = replaceNestedChars(matchItem[0], value, env);
                });
            }
        }

        // Only apply JSON parsing if the original value wasn't quoted
        const wasQuoted = (originalValue.startsWith('"') && originalValue.endsWith('"')) ||
                         (originalValue.startsWith("'") && originalValue.endsWith("'"));
        
        if (!wasQuoted) {
            value = parseValue(value);
        } else {
            // Handle escape sequences manually for quoted values
            value = value
                .replace(/\\n/g, '\n')      
                .replace(/\\r/g, '\r')      
                .replace(/\\t/g, '\t')      
                .replace(/\\\\/g, '\\');    
        }
        
        value = filterCommentInLines(value);
        
        if (typeof value === 'string') {
            value = value.trim();
        }

        env[cleanKey] = value;
        return true;
    });

    return env;
};

module.exports = { parseEnvironmentFileString };
