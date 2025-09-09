'use strict';
/**
 * This function filters empty lines
 *
 * @function filterEmptyLines
 *
 * @param {array} array - Array of lines to filter
 * @returns {array} filtered **value** - Array without empty lines
 */
const filterEmptyLines = (array) => {
    if (!Array.isArray(array)) {
        return [];
    }
    
    return array.filter((value) => {
        if (typeof value !== 'string') {
            return false;
        }
        
        const trimmedValue = value.trim();
        if (trimmedValue === '') {
            return false;
        }
        
        // Check if line contains an equals sign (valid env line format)
        const equalsIndex = value.indexOf('=');
        if (equalsIndex === -1) {
            return false;
        }
        
        // Check if value part after = is not empty
        const valuePart = value.substring(equalsIndex + 1).trim();
        return valuePart !== '';
    });
};

module.exports = { filterEmptyLines };
