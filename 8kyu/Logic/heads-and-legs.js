// 8 kyu Heads and Legs 문제
// https://www.codewars.com/kata/574c5075d27783851800169e/train/javascript

function animals(heads, legs) {
  if (heads === 0 && legs === 0) {
    return [0, 0]
  }

  const cows = (legs - 2 * heads) / 2
  const chickens = heads - cows

  if (cows < 0 || chickens < 0 || cows % 1 !== 0 || chickens % 1 !== 0) {
    return 'No solutions'
  }

  return [chickens, cows]
}
