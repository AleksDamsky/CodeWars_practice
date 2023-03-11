// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}
boolToWord(true)

//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    //   let arr = str.split()
      return str.trim().split(" ").reverse().join(" ");
    }
    
    nameShuffler('john McClane');

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (pump, mpg, fuelLeft) => {
  return (pump > (mpg * fuelLeft)) ? false : true;
};
zeroFuel()

//Пример из Академии. Приеняем метод .map

const films = [
    {
      id: 0,
      title: 'Die hard',
    },
    {
      id: 1,
      title: 'Terminator',
    },
  ];

//   let arr = [];
//   films.forEach((films, index) => {
//     arr[index] = films.title;
//   });

//   console.log(arr);

// const arr = films.map((films, index) => {
//   return films.title;
// })

// console.log(arr);

const arr = {
  'Задачи на сегодня': 3,
  'Просроченные': 2,
  'Выполненные': 388,
}
const arr2 = {
  'lol': 3,
  'kek': 2,
  'som': 388,
}

console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(Object.entries(arr));
console.log(Object.entries(arr).map((arrItem) => `${arrItem[0]} - ${arrItem[1]}`).join(', '));
console.log(Object.assign({}, arr, arr2));
const groups = [['Саша', 'Игорь'], ['Лидия', 'Сергей']];
groups.forEach((items) =>{
  items.forEach((members) => {
    console.log(members)
  })
});

const AGE = 3;

function test1(intro){
  function getExample(){
    let a = 'lol';
    let b = 'kek';

    if(AGE === 30){
      return a;
    }
    return b;
  }
  console.log(`${intro} ${getExample()}`)
}

test1('Скажи')


function test2(){
  var init = 'hripnv';
  function getExample(){
    console.log(init);
  }
  getExample()
}

test2();

function test3(){
  var a = 'hripnv';
  function getExample(){
    console.log(a);
  }

  return getExample;
}

let newFunc = test3();
newFunc();


function crateGenerate(){
  let a = 0;
  function getExample(){
    a++;
    return a;
  }
  return getExample;
}
let myGenerate = crateGenerate();
console.log(myGenerate());
console.log(myGenerate());
console.log(myGenerate());

/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения случайных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

// Функция, которая создает рандомное число
function getRandomNum(min, max){
  let upper = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  let lower = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  let result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function test4(min, max){
  let boxForNumber = [];

  function generateNum(){
    let currentNum = getRandomNum(min, max);

    if(boxForNumber.length >= (max - min + 1)){
      console.error(`Все числа уже перебраны от ${min} до ${max}`)
      return null;
    }

    while(boxForNumber.includes(currentNum)){
      currentNum = getRandomNum(min, max);
    }
    boxForNumber.push(currentNum);
    return currentNum;
  }
  console.log(boxForNumber)
  return generateNum;
}

let myRandomNum = test4(0, 100);

console.log(myRandomNum())
// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  if (cap >= on - wait){
  return 0;
  }

  return (on + wait) - cap;
}

enough(100, 32, 88);
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString);
}

getAge("4 years old");

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  let sortArr = numbers.sort((a, b) => a - b);
  return sortArr[0] + sortArr[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

function switchItUp(number){
  switch(number) {
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return  'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Zero'
  }
}


// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.

function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++) {
  if (arr[i] - arr[i - 1] != 1)
    return arr[i];
}
  return null;
}