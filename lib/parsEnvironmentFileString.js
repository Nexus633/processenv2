'use strict';

const { filterCommentLines } = require("./filter/filterCommentLines");
const { filterEmptyLines } = require("./filter/filterEmptyLines");
const os = require('os');
const { parsValue } = require("./parsValue");
const { removeQuotationMarks } = require("./filter/removeQuotationMarks");
const { replaceValues } = require("./replaceValues");
const parsEnvironmentFileString = (environmentString) => {
    const env = {};
    const environmentFileArray = environmentString.split(os.EOL);
    const parsFilterEmptyLines = filterEmptyLines(environmentFileArray);
    const parsFilterCommentLines = filterCommentLines(parsFilterEmptyLines);

    parsFilterCommentLines.filter( (val) => {
        const splitVal = val.split('=');
        splitVal[0] = removeQuotationMarks(splitVal[0]);
        splitVal[1] = removeQuotationMarks(splitVal[1]);

        const match = splitVal[1].matchAll(/\${[A-Z_]+}/g);
        const arrayFromMatch = Array.from(match);
        if(arrayFromMatch.length > 0){
            if(arrayFromMatch.length === 1){
                splitVal[1] = replaceValues(arrayFromMatch[0][0], splitVal[1], env)
            }else{
                arrayFromMatch.forEach( (val) => {
                    splitVal[1] = replaceValues(val[0], splitVal[1], env)
                })
            }
        }

        splitVal[1] = parsValue(splitVal[1]);
        env[splitVal[0]] = splitVal[1];
    });

    return env;
};

module.exports = { parsEnvironmentFileString }
