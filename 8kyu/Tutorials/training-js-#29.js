// 8 kyu Training JS #29: methods of arrayObject---concat() and join() 문제
// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
  //coding here...
  const flattened = arr.reduce((acc, cur) => acc.concat(cur), [])
  const sorted = flattened.sort((a, b) => b - a)
  const joined = sorted.join('>')

  return joined
}
