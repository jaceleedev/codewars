// 8 kyu Gravity Flip 문제
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip = (d, a) => {
  //TODO
  return a.sort((x, y) => (d === 'R' ? x - y : y - x))
}
