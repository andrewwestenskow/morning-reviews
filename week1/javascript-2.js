//For loops
let arr = [5, 6, 7, 8, 9]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

//Callbacks
function add(num1, num2) {
  return num1 + num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function showMeTheMoney(num1, num2) {
  return `$${num1 + num2}`
}

function calculator(num1, num2, otherFunction) {
  return otherFunction(num1, num2)
}

console.log(calculator(38, 47, add))

console.log(calculator(25, 50, showMeTheMoney))

//Ternaries and modulus

function isItEven(num) {
  // if(num % 2 === 0){
  //   return `Yup, she's even`
  // } else {
  //   return `Not a chance`
  // }

  return num % 2 === 0 ? `Yup, she's even` : `Not a chance`
}

const phrase = isItEven(16)

console.log(phrase)

//Object Referencing
let person = { name: 'Andrew' }

let dude = person

dude.name = 'Xander'

console.log(person)
