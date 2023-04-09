// 8 kyu Name on billboard 문제
// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

function billboard(name, price = 30) {
  let answer = 0

  for (let i = 0; i < name.length; ++i) {
    answer += price
  }

  return answer
}
