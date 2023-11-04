'use strict';

const filterCommentLines = (array) => {
    return array.filter((value) => {
        if (!value.startsWith('#')) {
            return value;
        }
    });
};

module.exports = { filterCommentLines };
