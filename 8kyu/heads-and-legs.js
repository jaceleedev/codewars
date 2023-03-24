// 8 kyu Heads and Legs 문제
// https://www.codewars.com/kata/574c5075d27783851800169e/train/javascript

function animals(heads, legs) {
  // return [Chickens, Cows]

  const cows = (legs - heads * 2) / 2;
  const chickens = heads - cows;

  if (
    heads < 0 ||
    legs < 0 ||
    cows < 0 ||
    chickens < 0 ||
    parseInt(cows) !== cows ||
    parseInt(chickens) !== chickens
  ) {
    return 'No solutions';
  }

  return [chickens, cows];
}
