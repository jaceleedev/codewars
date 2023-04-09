// 7 kyu Rubik's Cube Art 문제
// https://www.codewars.com/kata/6387ea2cf418c41d277f3ffa/train/javascript

function cube(n) {
  let result = ''
  let blank = n - 1

  for (let i = 0; i < n; ++i) {
    result += ' '.repeat(blank - i)
    result += '/\\'.repeat(i + 1)
    result += '_\\'.repeat(n)
    result += '\n'
  }

  blank = 0

  for (let i = n - 1; i >= 0; --i) {
    result += ' '.repeat(blank)
    result += '\\/'.repeat(i + 1)
    result += '_/'.repeat(n)
    result += '\n'
    ++blank
  }

  return result.slice(0, result.length - 1)
}
