// 8 kyu Sum of differences in array 문제
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
  if (arr === null || arr.length === 0) {
    return 0
  }

  arr.sort((a, b) => b - a)

  return arr[0] - arr[arr.length - 1]
}
