// 8 kyu Sum Arrays 풀이 완료
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
function sum(numbers) {
  'use strict'
  return numbers.reduce((acc, current) => acc + current, 0)
}
