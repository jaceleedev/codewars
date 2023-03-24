// 8 kyu Training JS #18: Methods of String object--concat() split() and its good friend join() 문제
// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((word) => word.split('').join(separator))
    .join(' ');
}
