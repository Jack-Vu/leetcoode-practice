//Given number n find the first nth elements of the Fibonacci Sequence
// Fib Seq is a sequence in which each number is the sum of the two preceding ones
// first two numbers in the sequence are 0 and 1
// fib(2) = [0, 1]
// fib(3) = [0, 1 , 1]
// fib(7) = [0, 1, 1, 2, 3, 5, 8]

function fibonacci(n) {
  const array = [0, 1];
  for (let index = 2; index < n; index++) {
    array[index] = array[index - 2] + array[index - 1];
  }
  return array;
}

function fibRecursive(n) {
  if (n < 2) {
    return n; // this is cleaner then having an if statement for 0 and 1 since you are returning them respectively 
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibRecurArray(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  const arr = fibRecurArray(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

// Big-O = O(n)
// console.log(fibRecursive(3));
console.log(fibRecurArray(7));
// console.log(fibonacci(7));

function fibRecurArrayV2(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const array = fibRecurArrayV2(n - 1);
  return [...array, array[n - 1] + array[n - 2]];
}

// Big-O = 2^n
// not as good as the iterative version of fib so its not as preferred since you'll be running the functions more time you'd just loop through it 
console.log(fibRecurArrayV2(7))