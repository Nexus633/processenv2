'use strict';
const { parseValue } = require('./parseValue');

/**
 * This function parse the Global Super process.env
 * The values in process.env will be parsed by {@link parseValue}
 *
 * @function getProcessEnv
 *
 * @returns {object} **env**
 */
const getProcessEnv = () => {
    const env = {};

    // eslint-disable-next-line no-undef
    Object.keys(process.env).forEach((name) => {
        // eslint-disable-next-line no-undef
        env[name] = parseValue(process.env[name]);
    });

    return env;
};

module.exports = { getProcessEnv };
