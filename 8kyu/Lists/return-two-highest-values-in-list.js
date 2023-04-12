// 8 kyu Return Two Highest Values in List 문제
// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

function twoHighest(arr) {
  const set = new Set(arr)
  const answer = [...set].sort((a, b) => b - a)

  return answer.length < 2 ? answer : answer.slice(0, 2)
}
