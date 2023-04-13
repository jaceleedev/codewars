// 8kyu The Feast of Many Beasts 문제
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
  //your function here
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  )
}
