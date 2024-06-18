//Given a natural number n determine if the number is prime or not
// prime is greater than 1 is not a product of two smaller natural numbers
// isPrime(5) = true 1*5 or 5*1
// ints larger than the square root do not need to be checked because whenever n = a * b one of the two factors a and b is less than or equal to the square root of n

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) { //the sqrt is the optimization
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(11));

//Big-O = O(n)
