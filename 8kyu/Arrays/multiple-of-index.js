// 8 kyu Multiple of index 문제
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

function multipleOfIndex(array) {
  // good luck
  return array.filter((el, index) => el % index === 0)
}
