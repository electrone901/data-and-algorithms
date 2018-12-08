/*

String Compression: Implement a method to perform basic string compression 
using the counts of repeated characters. For example, the string aabcccccaaa 
would become a2blc5a3. If the "compressed" string would not become smaller than the
 original string, your method should return
the original string. You can assume the string has only uppercase and lowercase
letters (a - z).


        PSEUDOCODE:
      1: initialized count = 1 because is the first time we encouter str[i] 
      2: if str[i] != str[i+1] then output = letter + count and reset count =1;
      3: if str[i] == str[i+1] then increase the counter++
      4: return output;


*/

function strCompression(str) {
  if(str.length === 0) return 'Enter a valid string!';

  let output = '';
  let count = 1;

  for(let i=0; i < str.length; i++) {
    if(str[i] !== str[i+1]) {
      output += str[i] + count;
      count = 1;
    }
    else {
      count++;
    }
  }

  return output;
}
strCompression('aabcccccaaa') //=> 'a2b1c5a3'
strCompression('bbaaaabcdeeefff') //=> 'b2a4b1c1d1e3f3'


