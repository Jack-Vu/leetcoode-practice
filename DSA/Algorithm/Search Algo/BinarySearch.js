//given a SORTED** array of n elements and a target element t find index of t in the array return -1 if target element is not found
// array = [-5, 2, 4, 6, 10], t = 10 should return 4

const { log } = require("console");

// find middle element if target is equal return
// if less binary search left half if more binary search right half

const array = [-5, 2, 4, 6, 10];

function binarySearch(t, array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === array[middleIndex]) {
      return middleIndex;
    }
    if (t < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

//Big-O = O(logn)
// console.log(binarySearch(10, array));

function binarySearchRecursive(array, t) {
  return search(array, t, 0, array.length - 1);
}

function search(array, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === array[middleIndex]) {
    return middleIndex;
  }
  if (t < array[middleIndex]) {
    return search(array, t, leftIndex, middleIndex - 1);
  } else {
    return search(array, t, middleIndex + 1, rightIndex);
  }
}
//Big-O = O(logn)
console.log(binarySearchRecursive(array, 10));
