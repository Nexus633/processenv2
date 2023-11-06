'use strict';
/**
 * This function filters inline comments after escaped hashtag
 *
 * @function filterCommentInLines
 *
 * @param {(string|array|object)} value
 * @returns {(string|array|object)} filtered **value**
 */
const filterCommentInLines = (value) => {
    if (Array.isArray(value)) {
        value.forEach((val, index) => {
            value[index] = filterCommentInLines(val);
        });

        return value;
    }

    if (typeof value === 'object') {
        const keys = Object.keys(value);

        keys.forEach((key) => {
            value[key] = filterCommentInLines(value[key]);
        });
        return value;
    }

    if (!value.includes('#')) {
        return value;
    }

    const match = value.matchAll(/\\?\s?#\s?/g);
    const arrayFromMatch = [...match];
    const filteredMatch = arrayFromMatch.filter((val) => {
        return !val[0].includes('\\');
    });

    if (filteredMatch.length > 0) {
        value = value.slice(0, filteredMatch[0].index).trim();
    }

    return value.replaceAll('\\#', '#');
};

module.exports = { filterCommentInLines };
