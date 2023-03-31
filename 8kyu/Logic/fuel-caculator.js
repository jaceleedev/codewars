// 8 kyu Fuel Calculator: Total Cost 문제
// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(litres, pricePerLitre) {
  // your code here
  // Good luck with it!
  const discount = Math.min(Math.floor(litres / 2) * 5, 25)
  const discountPrice = pricePerLitre - discount / 100
  const cost = litres * discountPrice

  return Math.round(cost * 100) / 100
}
