// 8 kyu Training JS #31: methods of arrayObject---isArray() indexOf() and toString() 문제
// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

function blackAndWhite(arr) {
  //coding here...
  let result = ''

  if (!Array.isArray(arr)) {
    result = `It's a fake array`
  } else if (arr.includes(5) && arr.includes(13)) {
    result = `It's a black array`
  } else {
    result = `It's a white array`
  }

  return result
}
