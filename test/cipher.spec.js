// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher.js';

describe('cipher', () => {

    test('should be an object', () => {
        expect(typeof cipher).toBe('object');
    });

    describe('cipher.encode', () => {

        test('should be a function', () => {
            expect(typeof cipher.encode).toBe('function');
        });
        test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
            expect(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33)).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG")
        });


    });

    describe('cipher.decode', () => {

        test('should be a function', () => {
            expect(typeof cipher.decode).toBe('function');
        });

        test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
            expect(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33)).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        });

    });

});