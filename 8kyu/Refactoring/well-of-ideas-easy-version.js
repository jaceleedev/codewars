// 8 kyu Well of Ideas - Easy Version 문제
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x) {
  const numberOfIdeas = x.filter((idea) => idea === 'good').length

  return numberOfIdeas >= 3
    ? 'I smell a series!'
    : numberOfIdeas >= 1
    ? 'Publish!'
    : 'Fail!'
}
