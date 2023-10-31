'use strict';
const fs = require('fs');
const { getProcessEnv } = require("./getProcessEnv");
const { parsEnvironmentFileString } = require("./parsEnvironmentFileString");
const path = require('path');

const processenv = (key, defaultValue) => {
    defaultValue = typeof key === 'function' ? key : defaultValue;
    const rootDir = path.join(...process.argv[1].split(/[\/\\]/).slice(0, -1));
    const environmentFile = path.join('/',rootDir, '.env');
    let env = getProcessEnv();

    if(fs.existsSync(environmentFile)){
        const readEnvironmentFile = fs.readFileSync(environmentFile, 'utf-8').trim();
        const parsedEnvironmentFile = parsEnvironmentFileString(readEnvironmentFile);

        env = { ...env, ...parsedEnvironmentFile }
        process.env = { ...env, ...parsedEnvironmentFile }
    }

    if(!key && !defaultValue){
        return env;
    }

    if(typeof defaultValue === 'function'){
        if(typeof key === 'function'){
            return defaultValue(env);
        }
        return defaultValue(env[key]);
    }


    return env[key] ?? defaultValue;

}

module.exports = { processenv }
