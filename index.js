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