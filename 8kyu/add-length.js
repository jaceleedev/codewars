// 8kyu Add Length 문제
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
  //start-here
  return str.split(' ').map((word) => word + ' ' + word.length)
}
