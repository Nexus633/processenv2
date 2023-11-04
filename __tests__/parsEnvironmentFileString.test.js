'use strict';

const fs = require('fs');
const path = require('path');
const { parsEnvironmentFileString } = require('../lib/parsEnvironmentFileString');

describe('test filterEmptyLines', () => {
    test('test filter empty values', () => {
        const readEnvironmentFile = fs
            // eslint-disable-next-line no-undef
            .readFileSync(path.join(__dirname, '.env.test'), 'utf-8')
            .trim();

        const array = parsEnvironmentFileString(readEnvironmentFile);
        expect(typeof array).toEqual('object');
    });
});
