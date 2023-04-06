// 7 kyu Bubblesort Once 문제
// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript

function bubblesortOnce(a) {
  // TODO
  const answer = [...a]

  for (let i = 0; i < answer.length - 1; ++i) {
    if (compare(answer, i, i + 1)) {
      swap(answer, i, i + 1)
    }
  }

  return answer
}

function compare(arr, left, right) {
  if (arr[left] > arr[right]) {
    return true
  }

  return false
}

function swap(arr, left, right) {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}
