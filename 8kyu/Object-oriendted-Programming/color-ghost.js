// 8 kyu Color Ghost 문제
// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

const Ghost = function () {
  // your code goes here
  const colors = ['white', 'yellow', 'purple', 'red']
  const randomIndex = Math.floor(Math.random() * colors.length)
  this.color = colors[randomIndex]
}
