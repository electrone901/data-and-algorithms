/*
One Away: There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character. Given two
strings, write a function to check if they are one edit (or zero edits) away.
    
    EXAMPLES:
    pale, ple -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false


    PSEUDOCODE:

    1: if the absolute val of str1.length - str2.length > 1 that means that we need to do more then 1 edit, in that case return false
    2: count the numbers of edits by checking index character if not equal then count++
	3: check for early return if(count = 1) return false
	4: increase bigger length
	5 if lengths are equal increase both
	6: return true; 
    3: Loop through the strings, if the current val exist removed 


*/

function oneEditAway(s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;

  if(Math.abs(len1 - len2) > 1) return false;

  let i = 0,
      j = 0,
      count = 0;
  while(i < len1 && j < len2) {
    if(s1[i] !== s2[j]) {
      if(count == 1) return false;
      if(len1 > len2) i++;
      if(len1 < len2) j++;
      else {
        i++;
        j++;
      }
      count++;
    }
    else {
      i++;
      j++;
    }
  }
  if(i < len1 || j < len2) {
    if(count == 1) return false;
    count++;
  }
  return true;
}
console.log(oneEditAway('pale1', 'palew4'), false);
console.log(oneEditAway('pale', 'ple'), true);
console.log(oneEditAway('pales', 'pale'), true);
console.log(oneEditAway('pale', 'bale'), true);
console.log(oneEditAway('pale', 'bake'), false);

