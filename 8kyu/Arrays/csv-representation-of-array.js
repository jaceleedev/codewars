// 8 kyu CSV representation of array 문제
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

function toCsvText(array) {
  // good luck
  return array.map((row) => row.join(',')).join('\n')
}
