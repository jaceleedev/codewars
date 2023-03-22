// 8 kyu Training JS #9: loop statement --while and do..while 문제
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  //coding here
  const half = Math.round(n / 2)
  let i = 0

  while (true) {
    if (i === n) {
      break
    }

    if (i < half) {
      str = '*' + str
    } else {
      str = str + '*'
    }

    ++i
  }

  return str
}
