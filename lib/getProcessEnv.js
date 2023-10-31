'use strict';

const { parsValue } = require("./parsValue");
const getProcessEnv = () => {
    const env = {};

    Object.keys(process.env).forEach( (name) => {
        env[name] = parsValue(process.env[name]);
    });

    return env;
};

module.exports = { getProcessEnv }
