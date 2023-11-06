'use strict';
/**
 * This function filters comments at line start
 *
 * @function filterCommentLines
 *
 * @param {array} array
 * @returns {array} filtered **value**
 */
const filterCommentLines = (array) => {
    return array.filter((value) => {
        if (!value.startsWith('#')) {
            return value;
        }
    });
};

module.exports = { filterCommentLines };
