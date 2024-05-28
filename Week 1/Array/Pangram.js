// My solution
// class Solution {
// Function to check if given sentence is pangram
//   checkIfPangram(sentence) {
//     const lowerSentence = sentence.toLowerCase();
//     const alphabet = [
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//       "g",
//       "h",
//       "i",
//       "j",
//       "k",
//       "l",
//       "m",
//       "n",
//       "o",
//       "p",
//       "q",
//       "r",
//       "s",
//       "t",
//       "u",
//       "v",
//       "w",
//       "x",
//       "y",
//       "z",
//     ];
//     for (let i = 0; i < alphabet.length; i++) {
//       if (!lowerSentence.includes(alphabet[i])) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// Better solution

class Soluition {
  pangram(sentence) {
    let seen = new Set(); // set stores unique characters
    for (const currentChar of sentence.toLowerCase()) {
      // convert sentence to lower case and iterate over each character
      if (currentChar.match(/[a-z]/i)) {
        // if it an alphabet
        seen.add(currentChar); // add character to set
      }
    }
    return seen.size === 26;
  }
}
