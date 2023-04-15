// 8 kyu Total amount of points 문제
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  return games.reduce((totalPoints, game) => {
    const [x, y] = game.split(':').map(Number)
    let point = 0

    if (x > y) {
      point = 3
    } else if (x === y) {
      point = 1
    } else {
      point = 0
    }

    return totalPoints + point
  }, 0)
}
