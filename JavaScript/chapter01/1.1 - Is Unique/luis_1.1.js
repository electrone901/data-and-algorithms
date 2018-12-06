/*

Implement an algorithm to determine if a string has all unique characters self.
What if you cannot use additional data structures.

For this problem I will assume we are working ASCII characters for which there are 128 unique values.

*/


function isUnique(s) {
  let dictionary = {};
  for(char of s) {
    if(!dictionary[char]) {
      dictionary[char] = 1;
    }
    else {
      return false;
    }
  }
  return true;
}
isUnique("world");  // =>true
isUnique("simple"); // =>true
isUnique("hello");  // =>false
isUnique("racecar");// =>false
