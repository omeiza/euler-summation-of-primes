import {describe, expect, test} from "@jest/globals";
import sumOfPrimes from "./index";

describe("Summation of primes", () => {
	test("Get sum of primes below 10", () => {
		expect(sumOfPrimes(10)).toBe(17);
	});

	test("Get sum of primes below 2000000 (Two million", () => {
		expect(sumOfPrimes(2000000)).toBe(142913828922);
	});
});