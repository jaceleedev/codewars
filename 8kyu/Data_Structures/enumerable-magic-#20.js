// 8 kyu Enumerable Magic #20 - Cascading Subsets 문제
// https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript

function eachCons(array, n) {
  const result = []

  for (let i = 0; i <= array.length - n; ++i) {
    result.push(array.slice(i, i + n))
  }

  return result
}
