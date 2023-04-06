// 7 kyu Factory Functions #1 - Creating profile for people 문제
// https://www.codewars.com/kata/56fd46bcc5957c83ea001023/train/javascript

function person(
  firstName,
  lastName,
  age,
  gender,
  employed,
  occupation,
  married
) {
  // Program your factory function here :)
  const fullName = `${firstName} ${lastName}`

  return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,
    sayName() {
      return fullName
    },
    introduce() {
      return `Hello, my name is ${fullName}.  I am ${age} years old.  I am a ${gender}.`
    }
  }
}
