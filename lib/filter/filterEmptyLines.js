'use strict';
/**
 * This function filters empty lines
 *
 * @function filterEmptyLines
 *
 * @param {array} array
 * @returns {array} filtered **value**
 */
const filterEmptyLines = (array) => {
    return array.filter((value) => {
        const val = value.split('=')[1];
        if (value !== '' && val !== '') {
            return value;
        }
    });
};

module.exports = { filterEmptyLines };
