'use strict';
/**
 * This function removes only outer quotation marks while preserving inner ones
 *
 * @function removeQuotationMarks
 *
 * @param {string} string - The string to process
 * @returns {string} filtered **value** - String with only outer quotes removed
 */
const removeQuotationMarks = (string) => {
    if (typeof string !== 'string') {
        return string;
    }
    
    string = string.trim();
    
    // Remove outer double quotes but preserve inner ones
    if (string.startsWith('"') && string.endsWith('"') && string.length > 1) {
        string = string.slice(1, -1);
    }
    // Remove outer single quotes but preserve inner ones
    else if (string.startsWith("'") && string.endsWith("'") && string.length > 1) {
        string = string.slice(1, -1);
    }

    return string;
};

module.exports = { removeQuotationMarks };
