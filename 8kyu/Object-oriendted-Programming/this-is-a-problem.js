// 8 kyu "this" is a problem 문제
// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

function NameMe(first, last) {
  this.firstName = first
  this.lastName = last
  this.name = this.firstName + ' ' + this.lastName
}
