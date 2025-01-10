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

function binSearch(nums, target) {
  let middle = Math.floor(nums.length / 2);
  if (nums.length === 1 && nums[middle] !== target) {
    return 1;
  }
  if (nums[middle] === target) {
    return middle;
  } else if (target < nums[middle]) {
    binSearch([...nums.slice(0, middle)], target);
  } else {
    binSearch([...nums.slice(middle)], target);
  }
}

const numbers = [{ 1: 2 }, 2, 3, 4, 5];
const map = { 4: 5, 2: 3, 3: 1 };
const numSet = new Set(numbers);

console.log(binSearch([-1, 0, 2, 4, 6, 8], 3));
console.log(numSet);
console.log(numbers.includes(5));
console.log(!!map[1]);

for (num of numbers) {
  console.log(num);
}
