# React 1 Review

NOTE: Over the next 3 days we will be reviewing important react concepts by building a list of movies. We will use [this](https://github.com/andrewwestenskow/react-morning-reviews) repo as our guide. The students should fork and clone the repo to get started. You can find a finished version of the app on the `finished` branch. We will be able to add to and delete from this list of movies as well as sort the list by name or date.

## Concepts to review

- What is React, why was it created and what are it's advantages
- Component based architecture
  - What is the advantage of a components based architecture
- Important react features
  - Component based architecture
  - Unidirectional data flow
  - Virtual DOM

## Review

1. After taking any questions students would like to go over, it will be worthwhile to review a few conceptual things about react.
   1. React is a Javascript framework used to build front end user interfaces.
2. Important react features
   1. Component based architecture
      1. Websites are made out of individual components which are assembled to create views. These views are what the user sees and interacts with.
      2. This allows our code to be both modular and reusable. We are able to write the code for a component once and plug it in anywhere on our site
      3. React utilizes two types of components: class based and functional. Class based components house logic and state, functional components display information.
   2. Unidirectional data flow
      1. Data can only flow from parent to child, not the other way around. This allows for better control of data.
   3. Virtual DOM
      1. React leverages a virtual DOM as a middleman between our code and the actual DOM. This allows react to check for any changes that happen on the DOM and only update the parts that have actually changed
      2. This allows our apps to be more performant and efficient.

We'll now get started coding. After all the students have forked and cloned the above repo, delete everything in the `App.js` component and have them walk you through building the following:

```js
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="movie-list-title">The most amazing movie list</h1>
    </div>
  )
}

export default App
```

NOTE: The styles in App.css will handle the styling for this section.

We also want to create a List.js component. This will handle displaying and modifying our list of movies. Have the students walk you through building the following:

```js
import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }
  }

  render() {
    return <div className="List">I am the list component</div>
  }
}
export default List
```

Import it into our App.js and display it:

```js
import React from 'react'
import List from './Components/List'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="movie-list-title">The most amazing movie list</h1>
      <List />
    </div>
  )
}

export default App
```

This is all we will build for today. Field any questions and let the students know we will come back to the app tomorrow.
