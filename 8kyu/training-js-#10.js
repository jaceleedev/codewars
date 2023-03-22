// 8 kyu Training JS #10: loop statement --for 문제
// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  var odd = [],
    even = []
  //coding here
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }

  return [odd, even]
}
