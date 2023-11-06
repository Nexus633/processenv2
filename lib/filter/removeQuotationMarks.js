'use strict';
/**
 * This function removes quotation marks
 *
 * @function removeQuotationMarks
 *
 * @param {string} string
 * @returns {string} filtered **value**
 */
const removeQuotationMarks = (string) => {
    string = string.replaceAll(/^"/g, '');
    string = string.replaceAll(/"$/g, '');
    string = string.replaceAll(/^'/g, '');
    string = string.replaceAll(/'$/g, '');

    return string.trim();
};

module.exports = { removeQuotationMarks };
