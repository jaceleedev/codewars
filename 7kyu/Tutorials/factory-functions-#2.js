// 7 kyu Factory Functions #2 - Inheritance and Object Composition 문제
// https://www.codewars.com/kata/570128f870ce0e81b80016db/train/javascript

function constructionWorker(firstName, lastName, age, gender, married, boss) {
  // Define Me :)
  const worker = person(
    firstName,
    lastName,
    age,
    gender,
    true,
    'construction worker',
    married
  )

  worker.boss = boss
  worker.sayBossName = function () {
    return `My boss is called ${boss} and is a very nice person!`
  }

  return worker
}
