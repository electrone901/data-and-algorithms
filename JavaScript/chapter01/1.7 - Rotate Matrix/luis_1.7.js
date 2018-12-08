/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?

Write a function that rotates a matrix clockwise:

  PSEUDO CODE:
  
  1: if n = 0 return false
  2: make a deepcopy of matrix
  3: loop through every row
  4: loop through every colum
  5: set result to the rotated: the idea is to build our result into a new resMatrix by
     getting every column & setting it to row 

          MATRIX         RESULT
           j=0 .         j=0 1 2
        i=0 [1,2,3]   i=0 [_,_,_]
        i=1 [4,5,6]   i=1 [_,_,_]
        i=2 [7,8,9]   i=2 [_,_,_]


      res[0][0] = matrix[2][0]
      res[0][1] = matrix[1][0]
      res[0][2] = matrix[0][0]

      therefore you can say:
        for(i=0; i<n; i++)
          for(j= n-1; j>=0; j--)
            res[i][n-1-j] = matrix[j][i]

  6: return res;

*/  
function rotate(matrix) {
  let n = matrix.length;
  if(n === 0) return false;

  // makes a deepcopy of matrix without reference
  let res = JSON.parse(JSON.stringify(matrix));

  for(let x = 0; x < n; x++) {
    for(let y = n-1; y >= 0; y--) {
      res[x][n-1-y] = matrix[y][x];
    }
  }
  return res;
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix);


/*
 We can actually do better, instead of making arrays each time we can rotate left to top, bottom to left, right to left and top to right.
    ######################
    #  a  ---------->  d #
    #  ^               | #
    #  |               | #
    #  |               | #
    #  |               v #
    #  b <------------ c #
    #######################

  
  1:

*/
function rotateMatrix(matrix) {
  if(matrix.length == 0) return false;
  let len = matrix.length; 
  
  
  for(let layer = 0; layer < len/2; layer++) {
    let first = layer;
    let last = len - 1 - layer;
    for(let i = first; i < last; i++) {
      let offset = i - first;
      
      // save top
      let top = matrix[first][i];
      console.log('top',matrix[first][i])
      
      // left to top
      matrix[first][i] = matrix[last - offset][first];
      
      // bottom to left
      matrix[last - offset][first] = matrix[last][last - offset];
      
      // right to bottom
      matrix[last][last - offset] = matrix[i][last];
      
      // top to right
      matrix[i][last] = top;
    }
  } 
  return matrix;
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotateMatrix(matrix)

