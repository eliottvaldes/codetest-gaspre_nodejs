const primeFactors = require('../logicTest/primeFactors');


describe('primeFactors', () => {
    test('returns [2, 2, 5] for 20', () => {
        expect(primeFactors(20)).toEqual([2, 2, 5]);
    });

    test('returns [2, 3, 5, 11] for 330', () => {
        expect(primeFactors(330)).toEqual([2, 3, 5, 11]);
    });

    test('returns [] for 1', () => {
        expect(primeFactors(1)).toEqual([]);
    });

    test('returns [2, 2, 2] for 8', () => {
        expect(primeFactors(8)).toEqual([2, 2, 2]);
    });

    test('returns [2, 2, 2, 2, 2] for 32', () => {
        expect(primeFactors(32)).toEqual([2, 2, 2, 2, 2]);
    });

    test('returns [3, 3, 7] for 63', () => {
        expect(primeFactors(63)).toEqual([3, 3, 7]);
    });
});