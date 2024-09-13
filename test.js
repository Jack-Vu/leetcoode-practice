const array = [1, 3, 4, 5, 7, 10, 11];
const target = 7;

function isValid(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return -1;
}

// console.log(isValid(array, target));

const word = "this is a long word";

const targetWord = "log";

const char = ["a", "b"];

console.log(word.includes(targetWord));
console.log("a" in char);

function maxSubArray(nums) {
  let [runningSum, maxSum] = [nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const sum = runningSum + num;

    runningSum = Math.max(num, sum);
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
}

function test() {
  const binaryRep = (0).toString(2);
  let countOne = 0;
  let countZero = 0;
  for (let i = 0; i < binaryRep.length; i++) {
    if (binaryRep === "0") {
      countZero++;
    }
    if (binaryRep === "1") {
      countOne++;
    }
  }
  console.log("Count 0", countZero);
  console.log("Count 1", countOne);
}

test();
