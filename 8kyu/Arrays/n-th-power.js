// 8 kyu N-th Power 문제
// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

function index(array, n) {
  //your code here
  return array.length - 1 < n ? -1 : array[n] ** n
}
