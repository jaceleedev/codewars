// 8 kyu Calculate average 문제
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0
  }

  return array.reduce((acc, current) => acc + current) / array.length
}
