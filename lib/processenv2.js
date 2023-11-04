'use strict';
const fs = require('fs');
const path = require('path');
const { getProcessEnv } = require('./getProcessEnv');
const { parsEnvironmentFileString } = require('./parsEnvironmentFileString');

const processenv = (key, defaultValue) => {
    defaultValue = typeof key === 'function' ? key : defaultValue;
    // eslint-disable-next-line no-undef
    const environmentFile = path.resolve(process.cwd(), '.env');
    let env = getProcessEnv();

    if (fs.existsSync(environmentFile)) {
        const readEnvironmentFile = fs.readFileSync(environmentFile, 'utf-8').trim();
        const parsedEnvironmentFile = parsEnvironmentFileString(readEnvironmentFile);

        env = { ...env, ...parsedEnvironmentFile };
        // eslint-disable-next-line no-undef
        process.env = { ...env, ...parsedEnvironmentFile };
    }

    if (!key && !defaultValue) {
        return env;
    }

    if (typeof defaultValue === 'function') {
        if (typeof key === 'function') {
            return defaultValue(env);
        }
        return defaultValue(env[key]);
    }

    return env[key] ?? defaultValue;
};

module.exports = { processenv };
