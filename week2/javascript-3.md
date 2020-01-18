# Javascript 3 Review

## Important concepts to review

- Array methods
  - This is the area where students struggle the most. Any amount of time spent on array methods is well spent. This review will be focused on reviewing these methods
  - It can be useful to present a problem, solve it with a for loop, and then solve it using

## map

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

## Filter

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

## New Array Methods

### indexOf

- Used to find the index of a particular item.
- Returns the first match

- We can use our people array for this as well. Find the index where Andrew is located

```js
const andrewIndex = people.indexOf(element => element.name === 'Andrew')
```
