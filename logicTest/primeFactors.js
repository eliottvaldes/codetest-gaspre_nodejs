/**
 * @abstract Function that returns the prime factors of a number using the sieve of Eratosthenes
 * @param {*} num 
 * @returns {Array} primeFactors
 */
const primeFactors = num => {
    let primeFactors = [];

    // using the sieve of Eratosthenes to find the prime numbers
    let factor = 2;
    // verify if the number is divisible by the factor
    while (factor * factor <= num) {
        // if its divisible, then its a prime factor and then divide the number by the factor
        if (num % factor === 0) {
            primeFactors.push(factor);
            num /= factor;
        } else {
            // if its not divisible, then increment the factor
            factor++;
        }
    }
    // if the number is greater than 1, then its a prime factor
    num > 1 ? primeFactors.push(num) : null;

    return primeFactors;
};



// console.log(primeFactors(20)); 
// [2, 2, 5]

// console.log(primeFactors(330));
// [2, 3, 5, 11]

// console.log(primeFactors(17));
// [17]

// console.log(primeFactors(1));
// []
 
// console.log(primeFactors(0));
// []
