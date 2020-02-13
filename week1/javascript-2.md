# Week 1, Day 4 Review - Javascript 2

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/javascript-2
- Slides: https://slides.com/mattbodily/javascript-two#/

## Important Concepts to Review

1. Array Methods
  - push, pop, unshift, shift, slice, splice, length
2. For Loops
2. Callback Functions
3. Ternaries
4. Modulus
5. Object referencing

I will usually run through [these](https://repl.it/@awestenskow/JS2-Morning-Review) examples.

## For loops

- Remind them that for loops simply repeat a given block of code for as many times as we tell it to.
  - Often students will create a connection in their heads between for loops and arrays. I like to clarify why for loops are useful for iterating through arrays but they are not inherently connected
- I will usually do several examples of for loops
  - Create a for loop that runs 5 times, console log `i`
  - Create an array like this: `[1,2,3,4,5]` and console log `arr[i]`
  - Create an array like this: `[5,6,7,8,9]` and console log `arr[i]` to show the difference
- If they have more specific questions you can dive into them but this will usually clear up confusion. The idea is to keep it simple.

## Callback functions

- Ask them to define what a callback function is, work with their existing understanding to explain that a callback is a function that is passed as an argument to another function
- I will set up the following:

```js
function add(num1, num2) {
  return num1 + num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function calculator(num1, num2, cb) {
  return cb(num1, num2)
}
```

- Call calculator passing in either add or multiply as the callback. A few things to help reenforce what a callback is:
  - Change the parameter to be called something other than `cb`. I use `otherFunction` or something similar
  - Try passing in something other than a function, I usually will pass in a string to show that because we told `calculator` to expect a function, we have to provide it a function

## Ternaries and modulus

- I find it useful to review these two concepts together as they will frequently be used together
- First write a function used to check if a number is even, this is the easiest use of the modulus operator and will help them wrap their heads around it

```js
function isItEven(num) {
  if (num % 2 === 0) {
    return `Yep, it's even`
  } else {
    return `Not a chance`
  }
}
```

- Then comment out the if statement and help them rewrite it as a ternary. Walk them through the syntax of the ternary and how it is behaving

```js
function isItEven(num) {
//   if (num % 2 === 0) {
//     return `Yep, it's even`
//   } else {
//     return `Not a chance`
//   }
  return num %2 === 0 `Yep, it's even` : `Not a chance`
}
```

## Object referencing

- The idea here is to help the students understand how object referencing works, use the simplest example you can.

```js
let person = { name: 'Andrew' }

let referenceToPerson = person

referenceToPerson.name = 'Not Andrew'

console.log(person)
```

- Walk them through each line of this code as you write it and show them how `referenceToPerson` is just a reference to the person object and modifying it will change the original object.
