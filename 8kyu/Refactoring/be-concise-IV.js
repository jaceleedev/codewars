// 8 kyu Be Concise IV - Index of an element in an array 문제
// https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript

function find(a, e) {
  const i = a.indexOf(e)
  return i == -1 ? 'Not found' : i
}
