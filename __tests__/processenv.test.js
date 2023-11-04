'use strict';
const { processenv } = require('../lib/processenv2');
describe('test processenv', () => {
    test('test value is string or undefined', () => {
        const PWD = processenv('PWD');
        expect(typeof PWD).toBe('string');
    });

    test('test value is undefined', () => {
        const THIS_KEY_DOES_NOT_EXISTS = processenv('THIS_KEY_DOES_NOT_EXISTS');
        expect(typeof THIS_KEY_DOES_NOT_EXISTS).toBe('undefined');
    });

    test('test value is string with callback', () => {
        const callback = (data) => {
            expect(typeof data).toBe('string');
        };

        processenv('PWD', callback);
    });

    test('test value is undefined with callback', () => {
        const callback = (data) => {
            expect(typeof data).toBe('undefined');
        };

        processenv('THIS_KEY_DOES_NOT_EXISTS', callback);
    });

    test('test value is string with callback', () => {
        processenv('PWD', (val) => {
            expect(typeof val).toBe('string');
        });
    });

    test('test value is undefined with callback', () => {
        processenv('THIS_KEY_DOES_NOT_EXISTS', (val) => {
            expect(typeof val).toBe('undefined');
        });
    });

    test('test without key', () => {
        const env = processenv();
        expect(env).not.toBeUndefined();
    });

    test('test key is not exists with ?? operator', () => {
        const THIS_KEY_DOES_NOT_EXISTS = processenv('THIS_KEY_DOES_NOT_EXISTS') ?? false;
        expect(THIS_KEY_DOES_NOT_EXISTS).toBe(false);
    });

    test('test key is not exists with default value', () => {
        const THIS_KEY_DOES_NOT_EXISTS = processenv('THIS_KEY_DOES_NOT_EXISTS', 'productive');
        expect(THIS_KEY_DOES_NOT_EXISTS).toBe('productive');
    });

    test('test key as function with all values as object', () => {
        processenv((val) => {
            expect(typeof val).toBe('object');
        });
    });
});
