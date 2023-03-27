// 8 kyu Training JS #12: loop statement --for..in and for..of 문제
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  //coding here
  const answer = []

  for (const key in obj) {
    if (key.length === 5) {
      answer.push(key)
    }

    if (obj[key].length === 5) {
      answer.push(obj[key])
    }
  }

  return answer
}
