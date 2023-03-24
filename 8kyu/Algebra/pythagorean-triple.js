// 8 kyu Pythagorean Triple 문제
// https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript

function isPythagoreanTriple(integers) {
  // Good luck friends!
  integers.sort((a, b) => a - b)

  const [a, b, c] = integers

  return c * c === a * a + b * b
}
