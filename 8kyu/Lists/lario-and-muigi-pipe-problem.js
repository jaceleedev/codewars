// 8 kyu Lario and Muigi Pipe Problem 문제
// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

function pipeFix(numbers) {
  const startNumber = numbers[0]
  const lastNumber = numbers[numbers.length - 1]

  const answer = []

  for (let i = startNumber; i <= lastNumber; ++i) {
    answer.push(i)
  }

  return answer
}
