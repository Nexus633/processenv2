'use strict';

const fs = require('fs');
const path = require('path');
const { parseEnvironmentFileString } = require('../lib/parseEnvironmentFileString');

describe('test filterEmptyLines', () => {
    test('test filter empty values', () => {
        const readEnvironmentFile = fs
            // eslint-disable-next-line no-undef
            .readFileSync(path.join(__dirname, '.env.test'), 'utf-8')
            .trim();

        const array = parseEnvironmentFileString(readEnvironmentFile);
        expect(typeof array).toEqual('object');
    });
});
