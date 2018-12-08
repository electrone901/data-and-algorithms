/*
Assume you have a method isSubstring which checks if oneword is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").


Approaches:
a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
b) look for starting character before moving around and rotating -> starting characters might repeat
c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring
*/

function stringRotation(s1, s2) {
  if(s1.length > 0 && s1.length == s2.length) {
    return (s1 + s2).includes(s1);
  }
  else {
    return false;
  }
}
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);

