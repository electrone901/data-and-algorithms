/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

  PSEUDO CODE:
    1: Use a dictionary to check how many odd chars you have
    2: if char exist in dictionary, then delete it because appeared already 
       2 times.
    3: check the dictionary and if keys.length <=1 then return true because 
       to be a palindrome it can only have less than 1 odd char
*/

function palinPerm(str) {
  str = str.toLowerCase();
  let dictionary = {};
  for(char of str) {
    if(dictionary[char] || char == ' ') {
      delete dictionary[char];
    }
    else {
      dictionary[char] = 'odd';
    }
  }

  if(Object.keys(dictionary).length <= 1) {
    return true;
  }
  else {
    return false;
  }
}
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');

