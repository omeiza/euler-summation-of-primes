/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

const sumOfPrimes = (limit: number): number => {
	const isPrime = (input: number): boolean => {
		for (let i = 2; i < input; i++) {
			if (input % i === 0) return false;
		}

		return input > 1;
	}

	let primeSum = 0;
	for (let i = 0; i < limit; i++) {
		if (isPrime(i)) primeSum = primeSum + i;
	}

	return primeSum;
}

export default sumOfPrimes;