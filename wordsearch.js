// wordsearch.js

// not present, hor, vert, rev hor
const wordSearch = (matrix, word) => {
  let result = [];

  const hJoin = matrix.map(lArr => lArr.join(''));
  result.push(search(hJoin, word)); // horizontal search

  const rhJoin = [];
  for (let row of hJoin) {
    rhJoin.push(row.split('').reverse().join(''));
  }
  result.push(search(rhJoin, word)); // reverse horizontal search
  
  const tMatrix = [];
  for (let c = 0; c < matrix[0].length; c++) {
    const newRow = [];
    for (let r = 0; r < matrix.length; r++) {
      newRow.push(matrix[r][c]);
    }
    tMatrix.push(newRow);
  }
  const vJoin = tMatrix.map(lArr => lArr.join(''));
  result.push(search(vJoin, word)); // vertical search

  const rvJoin = [];
  for (let row of vJoin) {
    rvJoin.push(row.split('').reverse().join(''));
  }
  result.push(search(rvJoin, word)); // reverse vertical search

  return (result.includes(true) ? true : false);
};

const search = function(arr, word) {
  let notFound;
  for (row of arr) {
    if (row.includes(word)) {
      return true;
    } else {
      notFound = false;
    }
  }
  return notFound;
};


module.exports = wordSearch;

// // Stretch
// look backwards and diagonally
