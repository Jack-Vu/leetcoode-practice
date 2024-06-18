//Given a integer n find the factorial of that integer
//denoted as n! is the product of all positive integers less then or equal to n
// factorial(4) = 4*3*2*1 = 24

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorial(5));
console.log(factorialRecursive(4));


// Big-O = O(n)