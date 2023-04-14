// 8 kyu Simple Change Machine 문제
// https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript

function changeMe(moneyIn) {
  // Write your function here
  if (moneyIn === '20p') {
    return '10p 10p'
  }

  const acceptedInputs = ['£5', '£2', '£1', '50p']
  const changeValues = { '£5': 500, '£2': 200, '£1': 100, '50p': 50 }

  if (!acceptedInputs.includes(moneyIn)) {
    return moneyIn
  }

  let changeAmount = changeValues[moneyIn]
  let changeOutput = ''

  while (changeAmount > 0) {
    if (changeAmount >= 20) {
      changeOutput += '20p '
      changeAmount -= 20
    } else {
      changeOutput += '10p '
      changeAmount -= 10
    }
  }

  return changeOutput.trim()
}
