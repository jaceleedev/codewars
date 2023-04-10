// 8 kyu Removing Elements 문제
// https://www.codewars.com/ka제a/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr) {
  //your code here
  return arr.filter((element, index) => index % 2 == 0)
}
