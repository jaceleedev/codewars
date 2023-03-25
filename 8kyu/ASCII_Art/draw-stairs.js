// 8kyu Draw stairs 문제
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

function drawStairs(n) {
  // your code here
  let result = ''

  for (let i = 0; i < n; ++i) {
    result += ' '.repeat(i) + 'I' + '\n'
  }

  return result.slice(0, -1)
}
