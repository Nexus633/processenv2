'use strict';
/**
 * This function parses a value and tries to convert it to JSON if possible
 * 
 * If the value can be parsed as JSON (object, array, number, boolean), 
 * it returns the parsed value. Otherwise returns the original string value.
 * Also handles escape sequences like \n, \\, etc.
 *
 * @function parseValue
 *
 * @param {(object|string)} value - The value to parse
 * @returns {(object|string|number|boolean|array)} **value** - The parsed value or original string
 */
const parseValue = (value) => {
    if (typeof value !== 'string') {
        return value;
    }
    
    // Handle escape sequences
    let processedValue = value
        .replace(/\\n/g, '\n')      // Convert \n to actual newline
        .replace(/\\r/g, '\r')      // Convert \r to carriage return
        .replace(/\\t/g, '\t')      // Convert \t to tab
        .replace(/\\\\/g, '\\');    // Convert \\ to single \
    
    try {
        return JSON.parse(processedValue);
    } catch (exception) {
        return processedValue;
    }
};

module.exports = { parseValue };
