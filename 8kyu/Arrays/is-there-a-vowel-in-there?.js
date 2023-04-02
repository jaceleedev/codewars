// 8 kyu Is there a vowel in there? 문제
// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return a.map((el) => {
    const code = String.fromCharCode(el)

    if (vowels.indexOf(code) !== -1) {
      return code
    } else {
      return el
    }
  })
}
