// given an array of n elements and a target element t find the index of the t in the array return -1 if the target element is not found
// array = [-5, 2, 10, 4, 6] , t=10-> should return 2

const array = [-5, 2, 10, 4, 6];

function linearSearch(t, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) {
      return i;
    }
  }
  return -1;
}
// Big-O = O(n)
console.log(linearSearch(10, array));
console.log(linearSearch(6, array));
