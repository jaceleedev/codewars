// 8 kyu Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search() 문제
// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str, c) {
  //coding here..
  const firstPos = str.indexOf(c);
  const lastPos = str.lastIndexOf(c);
  let answer = 0;

  if (firstPos === -1) {
    answer = -1;
  } else if (lastPos === -1) {
    answer = 1;
  } else {
    answer = lastPos - firstPos;
  }

  return answer;
}
