// 8 kyu OOP: Object Oriented Piracy 문제
// https://www.codewars.com/kata/54fe05c제762e2e3047000add/train/javascript

function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew

  this.isWorthIt = function () {
    return this.draft - this.crew * 1.5 > 20
  }
}
