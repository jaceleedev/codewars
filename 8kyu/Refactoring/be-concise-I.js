// 8 kyu Be Concise I - The Ternary Operator 문제
// https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

// TODO: Refactor and shorten the function
function describeAge(age) {
  return (
    `You're a(n) ` +
    (age >= 65
      ? 'elderly'
      : age >= 18
      ? 'adult'
      : age >= 13
      ? 'teenager'
      : 'kid')
  )
}
