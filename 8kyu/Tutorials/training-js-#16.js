// 8 kyu Training JS #16: Methods of String object--slice(), substring() and substr() 문제
// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr) {
  //coding here...
  const shortestStr = arr.reduce((acc, current) =>
    acc.length > current.length ? current : acc
  );
  const shortestLength = shortestStr.length;

  return arr.map((str) => str.slice(0, shortestLength));
}
