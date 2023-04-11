// 8kyu They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite? 문제
// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript

function isOpposite(s1, s2) {
  if (!s1 && !s2) {
    return false
  }

  if (s1.length !== s2.length) {
    return false
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      return false
    }

    if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
      return false
    }
  }

  return true
}
