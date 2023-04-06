// 7 kyu Training Time 문제
// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

function shuffleIt(arr, ...rest) {
  //coding here...
  for (let i = 0; i < rest.length; ++i) {
    const left = rest[i][0]
    const right = rest[i][1]

    swap(arr, left, right)
  }

  return arr
}

function swap(arr, left, right) {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}
