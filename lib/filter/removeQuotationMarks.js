'use strict';
const removeQuotationMarks = (string) => {
    string = string.replaceAll(/^"/g, '');
    string = string.replaceAll(/"$/g, '');
    string = string.replaceAll(/^'/g, '');
    string = string.replaceAll(/'$/g, '');

    return string.trim();
}

module.exports = { removeQuotationMarks }
