// 8 kyu Get the mean of an array 문제
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(
    marks.reduce((acc, current) => acc + current) / marks.length
  )
}
