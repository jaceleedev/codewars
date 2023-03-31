// 8 kyu Blood-Alcohol Content 풀이 완료
// https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript

function bloodAlcoholContent(drinks, weight, sex, time) {
  const r = sex === 'male' ? 0.73 : 0.66
  const A = drinks.ounces * drinks.abv
  const BAC = ((A * 5.14) / weight) * r - 0.015 * time

  return Math.max(0, BAC)
}
