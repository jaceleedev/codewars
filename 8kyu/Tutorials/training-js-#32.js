// 8 kyu Training JS #32: methods of Math---round() ceil() and floor() 문제
// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript

function roundIt(n) {
  //coding here...
  const arr = n.toString().split('.')
  const left = arr[0].length
  const right = arr[1].length

  return left < right
    ? Math.ceil(n)
    : left > right
    ? Math.floor(n)
    : Math.round(n)
}
