'use strict';
/**
 * This function parsed
 *
 * @function parseValue
 *
 * @param {(object|string)} value
 * @returns {(object|string)} **value**
 */
const parseValue = (value) => {
    try {
        return JSON.parse(value);
    } catch (exception) {
        return value;
    }
};

module.exports = { parseValue };
