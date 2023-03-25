// 8 kyu Sort and Star 문제
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
  s.sort()

  const firstWord = s[0]

  const formattedStr = firstWord.split('').join('***')

  return formattedStr
}
