// 8 kyu Training JS #34: methods of Math---pow() sqrt() and cbrt() 문제
// https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript

function cutCube(volume, n) {
  //coding here...
  if (Math.cbrt(n) % 1 !== 0) {
    return false
  }

  const sideLength = Math.cbrt(volume / n)

  if (sideLength % 1 !== 0) {
    return false
  }

  return true
}
