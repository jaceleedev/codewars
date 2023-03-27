// 8 kyu Training JS #13: Number object and its properties 문제
// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  //coding here
  let result = '';

  if (n === Number.MAX_VALUE) {
    result = 'Input number is Number.MAX_VALUE';
  } else if (n === Number.MIN_VALUE) {
    result = 'Input number is Number.MIN_VALUE';
  } else if (isNaN(n)) {
    result = 'Input number is Number.NaN';
  } else if (n < -Number.MAX_VALUE) {
    result = 'Input number is Number.NEGATIVE_INFINITY';
  } else if (n > Number.MAX_VALUE) {
    result = 'Input number is Number.POSITIVE_INFINITY';
  } else {
    result = `Input number is ${n}`;
  }

  return result;
}
