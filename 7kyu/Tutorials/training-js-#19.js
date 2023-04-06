// 7 kyu Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace() 문제
// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
  //coding here...
  const words = str.toUpperCase().split(' ')
  const alienWords = words.map(
    (word) => word.slice(0, -1) + word.slice(-1).toLowerCase()
  )

  return alienWords.join(' ')
}
