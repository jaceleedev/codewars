// 8 kyu Be Concise II - I Need Squares 문제
// https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e/train/javascript

const squaresOnly = (a) => a.filter((n) => n ** 0.5 % 1 === 0)
