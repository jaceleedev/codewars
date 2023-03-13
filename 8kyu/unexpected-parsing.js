// 8kyu Unexpected parsing 문제
// https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript

function getStatus(isBusy) {
  const msg = isBusy ? 'busy' : 'available'

  return {
    status: msg
  }
}
