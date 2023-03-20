// 8kyu Find Multiples of a Number 문제
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  // your code here
  const result = []
  let i = 1

  while (true) {
    const num = integer * i

    if (num > limit) {
      break
    }

    result.push(num)
    ++i
  }

  return result
}
