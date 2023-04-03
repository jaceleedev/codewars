// 8 kyu Count of positives / sum of negatives 문제
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  // your code here
  if (!input || input.length === 0) {
    return []
  }

  const positives = input.filter((el) => el > 0).length
  const sum = input
    .filter((el) => el < 0)
    .reduce((acc, current) => acc + current, 0)

  return [positives, sum]
}
