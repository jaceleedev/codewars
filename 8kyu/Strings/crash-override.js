// 8 kyu Crash Override 문제
// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript

function aliasGen(first, last) {
  // Code Here
  const firstLetter = first.charAt(0).toUpperCase()
  const lastLetter = last.charAt(0).toUpperCase()

  if (!/[A-Z]$/.test(firstLetter) || !/[A-Z]$/.test(lastLetter)) {
    return 'Your name must start with a letter from A - Z.'
  }

  const firstNameAlias = firstName[firstLetter]
  const surnameAlias = surname[lastLetter]

  return `${firstNameAlias} ${surnameAlias}`
}
