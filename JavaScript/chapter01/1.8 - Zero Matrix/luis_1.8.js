/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, 
its entire row and column are set to 0.

ANALYSIS:
Since we have to turn row & col to 0 we can use an array for i & j that marks row & col.

PSEUDO CODE:
1: have rowArray & colArray, zeroExist = false
2: to mark our cols/rows loop through matrix and check if matrix[i][j] = 0 then row.push(i) col.push(j), and set zeroExist= true
3: if zeroExist then loop through matrix and check if i exist in rowArray if true matrix[i][j] = 0
4: return the matrix

*/

function zeroMatrix(m) {
	let zeroExist = false;
	let row = [],
		col = [];

	for(let i=0; i<m.length; i++) {
		for(let j=0; j<m[0].length; j++) {
			if(m[i][j] == 0) {
				zeroExist = true;
				row.push(i);
				col.push(j);
			}
		}
	}

	if(zeroExist) {
		for(let i=0; i<m.length; i++) {
			for(let j=0; j<m[0].length; j++) {
				if(i in row) m[i][j] = 0;
				if(j in col) m[i][j] = 0;
			}
		}
	}

	return m;
}
let m = [[0,1,2],[3,4,5],[6,7,8]];
zeroMatrix(m);




/*
OPTIMIZATION
This problem should be solved in place, i.e., no other array should be used. 
We can use the first column and the first row to track if a row/column should 
be set to 0.

Since we used the first row and first column to mark the zero row/column, 
the original values are changed.


Specifically, given, the following matrix
set-matrix-zero-1
this problem can be solved by following 4 steps:


Step 1:
First row contains zero = true;
First column contains zero = false;

Step 2: use first row and column to mark zero row and column.
set-matrix-zero-2

Step 3: set each elements by using marks in first row and column.
set-matrix-zero-3

Step 4: Set first column and row by using marks in step 1.
set-matrix-zero-4

*/

function zeroMatrix1(matrix) {
  let firstRowZero = false;
  let firstColumnZero = false;
 
  //set first column zero or not
  for(let i=0; i<matrix.length; i++){
      if(matrix[i][0] == 0){
          firstColumnZero = true;
          break;
      }
  }
  //set first row zero or not
  for(let i=0; i<matrix[0].length; i++){
      if(matrix[0][i] == 0){
          firstRowZero = true;
          break;
      }
  }

  //mark zeros on first row and column
  for(let i=1; i<matrix.length; i++){
      for(let j=1; j<matrix[0].length; j++){
          if(matrix[i][j] == 0){
              matrix[i][0] = 0;
              matrix[0][j] = 0;
          }
      }
  }

  //use mark to set elements
  for(let i=1; i<matrix.length; i++){
      for(let j=1; j<matrix[0].length; j++){
          if(matrix[i][0] == 0 || matrix[0][j] == 0){
              matrix[i][j] = 0;
          }
      }
  }

  //set first column and row
  if(firstColumnZero){
      for(let i=0; i<matrix.length; i++)
          matrix[i][0] = 0;
  }

  if(firstRowZero){
      for(let i=0; i<matrix[0].length; i++)
          matrix[0][i] = 0;
  }
  return matrix;
}
let matrix = [[0,1,2],[3,4,5],[6,7,8]];
// zeroMatrix1(matrix);

