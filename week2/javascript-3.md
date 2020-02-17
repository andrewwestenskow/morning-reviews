# Week 2, Day 1 Review - Javascript 3

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/javascript-3
- Slides: https://slides.com/matias_perez/javascript-three/

## Important Concepts to Review

1. Arrow Functions
2. Higher Order Array Methods
  - This is the area where students struggle the most. Any amount of time spent on array methods is well spent. The review code suggestions below will be focused on reviewing these methods (.map, .filter, .reduce)
  - It can be useful to present a problem, solve it with a for loop, and then solve it using a higher order array method
  - Below is also included an introductory example for the indexOf array method if time permits

3. For In Loops
4. Copying Objects using Object.assign()
5. Copying an Object or Array using the Spread Operator (...)
6. Nesting Data
7. Deleting Object Properties 

## Higher Order Array Methods Review
### Map

- Start with array of people objects:

```js
const people = [
  { name: 'Andrew', age: 27 },
  { name: 'Becca', age: 23 },
  { name: 'Brandon', age: 47 },
  { name: 'Peter', age: 15 },
]
```

- Create a new array of just the names using a for loop

```js
const names = []
for (let i = 0; i < people.length; i++) {
  names.push(people[i].name)
}
```

- Solve it using .map

```js
const names = people.map(function(element) {
  return element.name
})
```

- Then shorten it a bit to really show the advantage of higher order methods and array functions

```js
const names = people.map(element => element.name)
```

- Try to get them as much practice as possible playing with arrays of objects. This is the data structure they will struggle most with so it's okay to spend the most time on it.

### Filter

- We can use our same people method for this example. Let's create a new array consisting only of people who are over 21. Solve it first with a for loop:

```js
const canDrink = []

for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 21) {
    canDrink.push(people[i])
  }
}
```

- Now solve it with .filter

```js
const canDrink = people.filter(function(element) {
  if (element.age >= 21) {
    return true
  }
})
```

- Slim it down

```js
const canDrink = people.filter(function(element) {
  return element.age >= 21
})
```

- And even more

```js
const canDrink = people.filter(element => element.age >= 21)
```

### Reduce

- Reduce can be used in a variety of ways including to add things together - not just numbers, but also strings (concatenating)
- Use the code below to loop through the array and return a string welcoming everyone in the array to DevMtn (e.g., "Welcome Andrew, Matias, and Lucas to DevMountain!")

```js
let welcomeStr = 'Welcome'

for (let i = 0; i < people.length; i++) {
  if (i === people.length - 1) {
    welcomeStr += ' and ' + people[i].name + ' to DevMountain!'
  } else {
    welcomeStr += ' ' + people[i].name + ','
  }
}
```

- Now solve it with .reduce

```js
let welcomeStr = people.reduce(function (acc, curr, index, arr) {
  if (index === people.length - 1) {
    return acc += ` and ${curr.name} to DevMountain!`
  } else {
    return acc += ` ${curr.name},`
  }
}, 'Welcome')
```

-Slim it down

```js
let welcomeStr = people.reduce((acc, curr, index) => {
  if (index === people.length - 1) {
    return acc += ` and ${curr.name} to DevMountain!`
  } else {
    return acc += ` ${curr.name},`
  }
}, 'Welcome')
```

- And even more (still a little long, but more condensed than before)

```js
let welcomeStr = people.reduce((acc, curr, index) => index === people.length - 1 ? acc += ` and ${curr.name} to DevMountain!` : acc += ` ${curr.name},`, 'Welcome')
```

## New Array Methods

### indexOf

- Used to find the index of a particular item.
- Returns the first match

- We can use our people array for this as well. Find the index where Andrew is located

```js
const andrewIndex = people.indexOf(element => element.name === 'Andrew')
```
