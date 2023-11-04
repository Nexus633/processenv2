'use strict';
const { filterEmptyLines } = require('../lib/filter/filterEmptyLines');

describe('test filterEmptyLines', () => {
    test('test filter empty values', () => {
        const array = filterEmptyLines(['test=', 'MODE=live']);
        expect(array).toEqual(['MODE=live']);
    });
});
