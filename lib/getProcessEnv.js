'use strict';
const { parsValue } = require('./parsValue');

/**
 * This function parse the Global Super process.env
 * The values in process.env will be parsed by {@link parsValue}
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
        env[name] = parsValue(process.env[name]);
    });

    return env;
};

module.exports = { getProcessEnv };
