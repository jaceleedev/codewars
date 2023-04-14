// Is it a palindrome? 문제
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
  // your code here
  const lowerCaseStr = x.toLowerCase()

  return lowerCaseStr === lowerCaseStr.split('').reverse().join('')
}
