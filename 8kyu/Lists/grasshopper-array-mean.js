// 8 kyu Grasshopper - Array Mean 문제
// https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript

const findAverage = function (nums) {
  // Code here
  return nums.reduce((acc, current) => acc + current) / nums.length
}
