// 8 kyu Count the Monkeys! 문제
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

function monkeyCount(n) {
  // your code here
  const arr = []

  for (let i = 1; i <= n; ++i) {
    arr.push(i)
  }

  return arr
}
