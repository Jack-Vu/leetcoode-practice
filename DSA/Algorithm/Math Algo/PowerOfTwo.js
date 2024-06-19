//given a positive int n determine if the number is a power of 2
//if int x such that n === 2^x

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// Big-O = O(logn)


function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// Big-O = O(1)
// in binary a number that is a power of 2 ends in 0 besides 1

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(8));


// bitwise  Power Of Two
// 1 -> 1
// 2 -> 10
// 4 -> 100
// 8 -> 1000

// so 8 & 7 
// 8 = 1000
// 7 = 0111
// & = 0000
// lets do 5
// 5 = 0101
// 4 = 0100
// & = 0100

// bitwise AND (&) returns 1 if the corresponding bits of both operands are 1 else it returns 0
// bitwise OR (|) returns 1 if either corresponding bits of one operand is 1 else returns 0
// bitwise XOR (^) returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same
// bitwise NOT (~) inverts the bit (0 become 1, 1 become 0)

