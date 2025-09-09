'use strict';
const fs = require('fs');
const path = require('path');
const { getProcessEnv } = require('./getProcessEnv');
const { parseEnvironmentFileString } = require('./parseEnvironmentFileString');

/**
 * With **processenv2** you have the opportunity to use environment variables directly in your project.
 * You can parse **.env** files and add them to the global variables **_process.env_**.
 * You can also specify default values with **processenv2**. These values are used if there is no environment variable.
 * This makes it easier to check for errors and use standard configurations.
 *
 * You also have the option to define nested variables, arrays and objects in the environment file
 * You can use inline comments and masked hashtags (\\#)
 *
 * @function processenv
 * @param {string=} key - The environment variable key to retrieve
 * @param {any=} defaultValue - Default value or callback function
 * @returns {(string|object|array|function|undefined)} **value**
 */
const processenv = (key, defaultValue) => {
    defaultValue = typeof key === 'function' ? key : defaultValue;
    // eslint-disable-next-line no-undef
    const environmentFile = path.resolve(process.cwd(), '.env');
    let env = getProcessEnv();

    if (fs.existsSync(environmentFile)) {
        try {
            const readEnvironmentFile = fs.readFileSync(environmentFile, 'utf-8').trim();
            const parsedEnvironmentFile = parseEnvironmentFileString(readEnvironmentFile);

            env = { ...env, ...parsedEnvironmentFile };
            // eslint-disable-next-line no-undef
            process.env = { ...env, ...parsedEnvironmentFile };
        } catch (error) {
            // Silently fail if .env file cannot be read, keeping existing env
            console.warn('Warning: Could not read .env file:', error.message);
        }
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
