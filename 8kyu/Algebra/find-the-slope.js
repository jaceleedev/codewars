// 8 kyu Find the Slope 문제
// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript

function slope(points) {
  const x = points[2] - points[0];
  const y = points[3] - points[1];

  if (x === 0) {
    return 'undefined';
  }

  return (y / x).toString();
}
