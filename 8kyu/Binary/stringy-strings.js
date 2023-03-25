// 8 kyu Stringy Strings 문제
// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
  // your code here
  let result = ''

  for (let i = 0; i < size; ++i) {
    if (i % 2 === 0) {
      result += '1'
    } else {
      result += '0'
    }
  }

  return result
}
