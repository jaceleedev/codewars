// 8 kyu If you can't sleep, just count sheep!! 문제
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

const countSheep = function (num) {
  let answer = ''
  for (let i = 1; i <= num; ++i) {
    answer += `${i} sheep...`
  }
  return answer
}
