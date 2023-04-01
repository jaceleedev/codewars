// 8 kyu Beginner - Reduce but Grow 문제
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
  return x.reduce((acc, current) => acc * current)
}
