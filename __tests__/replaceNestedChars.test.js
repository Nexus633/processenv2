'use strict';
const { replaceNestedChars } = require('../lib/replaceNestedChars');

describe('test processenv', () => {
    test('test replace with null', () => {
        const str = replaceNestedChars('values');
        expect(str).toBe('values');
    });
});
