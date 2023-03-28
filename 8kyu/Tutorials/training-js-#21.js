// 8 kyu Training JS #21: Methods of String object--trim() and the string template 문제
// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  //coding here...
  const str = s.trim()
  let result = str

  for (let i = 1; i <= 4; ++i) {
    result += '\n' + `${str}`.repeat(i + 1)
  }

  return result
}
