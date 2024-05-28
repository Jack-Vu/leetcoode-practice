// My solution
// class Solution {
//   containsDuplicate(nums) {
//     const exisitingNumbers = [];
//     for (let i = 0; i < nums.length; i++) {
//       if (exisitingNumbers.includes(nums[i])) {
//         return true;
//       } else {
//         exisitingNumbers.push(nums[i]);
//       }
//     }
//     return false;
//   }
// }

// Better version
// Use a hash set since set can only hold unique elements, we can check if the element in the given array are present more than once by adding
// them to a set

class Solution {
  containsDUplicate(nums) {
    const uniqueNumbers = new Set(); // using set to store unique elements

    for (let i = 0; i < nums.length; i++) { 
      if (uniqueNumbers.has(nums[i])) { // if the set already contains current element return true
        return true;
      }
      uniqueNumbers.add(nums[i]); // adding element to the set
    }
    return false;
  }
}
