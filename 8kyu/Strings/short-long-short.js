// 8 kyu Short Long Short 문제
// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b) {
  // your code here
  const short = a.length > b.length ? b : a
  const long = a.length > b.length ? a : b

  return `${short}${long}${short}`
}
