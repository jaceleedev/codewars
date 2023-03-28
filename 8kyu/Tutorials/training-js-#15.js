// 8 kyu Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision() 문제
// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  //coding here..
  return arr.filter((number) => Number(number.toFixed(2)) < n).length;
}
