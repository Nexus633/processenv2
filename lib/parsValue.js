'use strict';
/**
 * This function parsed
 *
 * @function parseValue
 *
 * @param {(object|string)} value
 * @returns {(object|string)} **value**
 */
const parsValue = (value) => {
    try {
        return JSON.parse(value);
    } catch (exception) {
        return value;
    }
};

module.exports = { parsValue };
