// 7kyu draw me a chessboard 문제
// https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

function chessBoard(rows, columns) {
  // your code goes here
  const board = []

  for (let i = 0; i < rows; ++i) {
    board[i] = []

    for (let j = 0; j < columns; ++j) {
      if ((i + j) % 2 === 0) {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  return board
}
