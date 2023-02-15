// Напишите программу на JavaScript, которая принимает десять целых чисел как массив и отображает большее

//numbers = [2, 8, 4, 6, 12, -12, -4, -6, -2, -8];

numbers = 2846139057;
let myFunc = (num) => Number(num);
let arr = Array.from(String(numbers), myFunc);

console.log(arr);

console.log(Math.max.apply(null, arr));
