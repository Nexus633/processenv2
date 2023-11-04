'use strict';

const { parsValue } = require('./parsValue');
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
