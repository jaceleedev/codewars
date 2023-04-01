// 8 kyu Square(n) Sum 문제
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  return numbers
    .map((number) => number ** 2)
    .reduce((acc, current) => acc + current, 0)
}
