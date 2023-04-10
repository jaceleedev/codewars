// 8kyu SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes 문제
// https://www.codewars.com/kata/56ff9b53140fcca90b000530/train/javascript

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true)
  }
}
