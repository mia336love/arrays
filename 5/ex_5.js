// Write a JavaScript conditional statement to sort ten numbers.

let arr = [15, 45, 1, 23, 99, 87, 6, 18, 2, 37];

function sortArr(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(arr.sort(sortArr));
