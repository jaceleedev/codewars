// 8 kyu Invalid Login - Bug Fixing #11 문제
// https://www.codewars.com/kata/55e4c52ad58df7509c00007e/train/javascript

function validate(username, password) {
  if (password.includes('||') || password.includes('//')) {
    return 'Wrong username or password!'
  }

  const database = new Database()

  return database.login(username, password)
}
