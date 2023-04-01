// 8 kyu Filter out the geese 풀이
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher'
  ]

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((bird) => !geese.includes(bird))
}
