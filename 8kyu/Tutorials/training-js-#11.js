// 8 kyu Training JS #11: loop statement --break,continue 문제
// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls) {
  var bag = []
  //coding here
  for (let i = 0; i < dolls.length; ++i) {
    const doll = dolls[i]

    if (doll === 'Hello Kitty' || doll === 'Barbie doll') {
      bag.push(doll)

      if (bag.length === 3) {
        break
      }
    } else {
      continue
    }
  }

  return bag
}
