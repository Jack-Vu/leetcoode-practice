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
