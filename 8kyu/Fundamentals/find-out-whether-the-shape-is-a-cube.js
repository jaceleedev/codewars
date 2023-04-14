// 8kyu Find out whether the shape is a cube 문제
// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
const cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false
  }

  return volume === side * side * side
}
