// 8 kyu Do something "n.times" (Simplifying "for" loops) 문제
// https://www.codewars.com/kata/56e6a330715e7221d9000a3b/train/javascript

Number.prototype.times = function (f) {
  // Go ahead and define me :)
  for (let i = 0; i < this; ++i) {
    f(i)
  }
}
