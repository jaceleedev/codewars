// 8 kyu Coding 3min : Jumping Dutch act 문제
// https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

function sc(floor) {
  if (floor <= 1) {
    return ''
  } else if (floor <= 6) {
    return 'Aa~ '.repeat(floor - 1) + 'Pa! Aa!'
  } else {
    return 'Aa~ '.repeat(floor - 1) + 'Pa!'
  }
}
