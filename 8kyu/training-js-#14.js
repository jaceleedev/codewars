// 8 kyu Training JS #14: Methods of Number object--toString() and toLocaleString() 문제
// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  //coding here
  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
