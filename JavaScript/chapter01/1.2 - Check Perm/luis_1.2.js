/*

Module that Given two strings, write a method to decide if one is a permutation of the other.

*/ 


function permutation(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  
  let sort1 =  str1.split('').sort().join('');
  let sort2 = str2.split('').sort().join('');
  return sort1 == sort2;
}
permutation('race', 'ecar'); 	//=> true
permutation('sumit', 'tiums'); 	//=> true
permutation('test', 'ttew'); 	//=> false