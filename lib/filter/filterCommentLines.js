'use strict';
/**
 * This function filters comments at line start
 *
 * @function filterCommentLines
 *
 * @param {array} array - Array of lines to filter  
 * @returns {array} filtered **value** - Array without comment lines
 */
const filterCommentLines = (array) => {
    if (!Array.isArray(array)) {
        return [];
    }
    
    return array.filter((value) => {
        if (typeof value !== 'string') {
            return false;
        }
        
        const trimmedValue = value.trim();
        return !trimmedValue.startsWith('#');
    });
};

module.exports = { filterCommentLines };
