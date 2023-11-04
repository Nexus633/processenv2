'use strict';
const filterEmptyLines = (array) => {
    return array.filter((value) => {
        const val = value.split('=')[1];
        if (value !== '' && val !== '') {
            return value;
        }
    });
};

module.exports = { filterEmptyLines };
