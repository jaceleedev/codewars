// 7 kyu Find heavy ball - level: novice 문제
// https://www.codewars.com/kata/544047f0cf3제2503e000036e/train/javascript

function findBall(scales) {
  function divideBalls(arr) {
    const mid = Math.floor(arr.length / 2)
    return [arr.slice(0, mid), arr.slice(mid)]
  }

  function findHeavier(arr) {
    if (arr.length === 1) {
      return arr[0]
    }

    const [left, right] = divideBalls(arr)
    const result = scales.getWeight(left, right)

    if (result === -1) {
      return findHeavier(left)
    } else if (result === 1) {
      return findHeavier(right)
    } else {
      return 0
    }
  }

  const balls = [0, 1, 2, 3, 4, 5, 6, 7]

  return findHeavier(balls)
}
