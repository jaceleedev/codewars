// 8 kyu What's up next? 문제
// https://www.codewars.com/kata/542ebbdb494db239f8000046/train/javascript

function nextItem(xs, item) {
  // TODO: Implement me
  let found = false

  for (const x of xs) {
    if (found) {
      return x
    }

    if (x === item) {
      found = true
    }
  }

  return undefined
}
