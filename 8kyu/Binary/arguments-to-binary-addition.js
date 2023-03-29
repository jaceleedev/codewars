// 8 kyu Arguments to Binary addition 문제
// https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

function arr2bin(arr) {
  // show me the code
  const sum = arr.reduce((acc, current) => {
    const type = typeof current

    return acc + (type === 'number' ? current : 0)
  }, 0)

  return sum.toString(2)
}
