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

describe('test parseEnvironmentFileString', () => {
    test('test "=" in value', () => {
        const env = parseEnvironmentFileString('TEST=YG==');
        expect(env.TEST).toEqual('YG==');
    });
    test('test quotation marks "\'\'"', () => {
        const env = parseEnvironmentFileString('TEST="\'Some Text\'"');
        expect(env.TEST).toEqual("'Some Text'");
    });
    test('test quotation marks \'""\'', () => {
        const env = parseEnvironmentFileString('TEST=\'"Some Text"\'');
        expect(env.TEST).toEqual('"Some Text"');
    });
    test('test explicit line break', () => {
        const env = parseEnvironmentFileString('TEST=Some Text\\nMore Text');
        expect(env.TEST).toEqual('Some Text\nMore Text');
    });
    test('test double backslash', () => {
        const env = parseEnvironmentFileString('TEST=Some Text\\\\More Text');
        expect(env.TEST).toEqual('Some Text\\More Text');
    });
    test('test eol \\n', () => {
        const env = parseEnvironmentFileString('TEST=Some Text\nTEST2=More Text');
        expect(env.TEST).toEqual('Some Text'); 
        expect(env.TEST2).toEqual('More Text');
    })
    test('test eol \\r\\n', () => {
        const env = parseEnvironmentFileString('TEST=Some Text\r\nTEST2=More Text');
        expect(env.TEST).toEqual('Some Text'); 
        expect(env.TEST2).toEqual('More Text');
    })
    test('test value with #', () => {
        const env = parseEnvironmentFileString('TEST=Some Text#More Text');
        expect(env.TEST).toEqual('Some Text#More Text');
    });
    test('test lowercase variable names', () => {
        const env = parseEnvironmentFileString('test=Some Text');
        expect(env.test).toEqual('Some Text');
    });
    test('test lowercase variable name replacement', () => {
        const env = parseEnvironmentFileString('testing=def\ntest=abc${testing}');
        expect(env.test).toEqual("abcdef");
    });
    test('test uppercase variable name replacement', () => {
        const env = parseEnvironmentFileString('TESTING=def\ntest=abc${TESTING}');
        expect(env.test).toEqual("abcdef");
    });
    test('test allow numbers in variable name', () => {
        const env = parseEnvironmentFileString('TESTING123=def\ntest=abc${TESTING123}');
        expect(env.test).toEqual("abcdef");
    });
});
