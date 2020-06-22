// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      //completa este test!
      expect( cipher.encode(33 ,"ABC") ).toBe("HIJ");
    });
    test('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      //completa este test!
      expect( cipher.encode(33,"abc") ).toBe("hij");
  });

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset -33', () => {
      //completa este test!
      expect(cipher.decode(-33,"HIJ")).toBe("ABC");
    });
    test('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset -33', () => {
      //completa este test!
      expect(cipher.decode(-33, "hij")).toBe("abc");
    });
  });

});

});