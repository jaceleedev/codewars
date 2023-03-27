// 8 kyu Training JS #7: if..else and ternary operator 문제
// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n) {
  let price = 0

  if (n >= 10) {
    price = 90
  } else if (n >= 5) {
    price = 95
  } else {
    price = 100
  }

  return n * price
}
