# Javascript 4 review

## Important concepts to review

- The dom
  - This will be crucial to their understanding of react so it is worth taking the time to go over it.
- Events in javascript
  - Event handlers in javascript
- Accessing elements from the dom in javascript
  - Editing properties of those elements using style object, classList, and innerText

## Review

You can use [this](https://github.com/andrewwestenskow/event-handler-review) repo as a guide for this review. It's very simple but students often find that helpful for breaking down some of these concepts that aren't as clear to them. Lots of students struggle with finding elements and using event handlers after the afternoon project so doing it so simply helps drive home the concepts.

- Start by creating 3 files, an html, css, and javascript. Practice connecting all 3 files with the students. Place a console log at the top of your javascript file to demonstrate to students that the connection is working
- Create a div with an id of fun-dip, this will be our first example. Give it the following styles:

```css
#fun-dip {
  width: 100px;
  height: 100px;
  background: aqua;
}
```

- We want to write a function that will change the background color of fun-dip to #bada55 when we click it, have the students try to get there. Final code should looks something like this:

```js
const funDip = document.getElementById('fun-dip')

funDip.addEventListener('click', e => {
  funDip.style.backgroundColor = '#bada55'
})
```

> Take plenty of time to review with them the pattern of adding event listeners as well as what an event is and what the event object is. These concepts will be very helpful moving into react.

- Let's change the function to be more dynamic, we want to toggle between our two background colors when we click. The function should look something like this:

```js
funDip.addEventListener('click', e => {
  if (funDip.style.backgroundColor === 'rgb(186, 218, 85)') {
    funDip.style.backgroundColor = 'aqua'
  } else {
    funDip.style.backgroundColor = '#bada55'
  }
})
```

> NOTE: When you set the background color using a hex code, it will automatically convert to rgb values. Our check will need to take this into account. Let it fail the first time and have them help you figure out how to fix it.

- Let's also make our div grow when we click it:

```js
funDip.addEventListener('click', e => {
  funDip.style.height = '500px'
  funDip.style.width = '500px'

  if (funDip.style.backgroundColor === 'rgb(186, 218, 85)') {
    funDip.style.backgroundColor = 'aqua'
  } else {
    funDip.style.backgroundColor = '#bada55'
  }
})
```

- Finally let's demonstrate a couple of other events we have access to, mouseenter and mouseleave

```js
funDip.addEventListener('mouseenter', e => {
  funDip.style.backgroundColor = 'purple'
})

funDip.addEventListener('mouseleave', e => {
  funDip.style.backgroundColor = 'aqua'
})
```

- If you're able, you can also give an example of changing styles using classList
- Create a div with a class of snickers and give it the following style, also create an open class:

```css
.snickers {
  width: 300px;
  height: 100px;
  background: chocolate;
  color: white;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.open {
  width: 600px;
  height: 200px;
  font-size: 1.6rem;
}
```

- Create a function to toggle the open class:

```js
const snickers = document.querySelector('.snickers')

snickers.addEventListener('click', handleOpen)

function handleOpen() {
  snickers.classList.toggle('open')
}
```

> You can write this first as an if statement and then replace it with toggle. Also, take this time to review querySelector vs getElementById

- Finish up your snickers bar by setting the inner text of the div:

```js
function handleOpen() {
  snickers.classList.toggle('open')

  if (snickers.innerText !== 'SATISFIED') {
    snickers.innerText = 'SATISFIED'
  } else {
    snickers.innerText = `You're not you when you're hungry`
  }
}
```
