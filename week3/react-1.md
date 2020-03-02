# Week 3, Day 3 Review - React 1

NOTE: Over the next few days we will be reviewing important React concepts by building a list of movies. We will use [this](https://github.com/LucasSchaat/react-morning-reviews) as the basic version of the application. The students should fork and clone the repo to get started. You can find a finished version of the app [here](https://github.com/WLH17/react-morning-reviews). In this portion of the review, we will be setting up the framework for our movie list application. Over the course of the review, we will be displaying the movie information from the movie.json file as well as creating functionality for adding and deleting movies from the list.

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/react-1
- Slides: https://slides.com/matias_perez/react-one

## Important Concepts to Review

1. What is React, why was it created and what are it's advantages
2. Component based architecture
  - What is the advantage of a components based architecture
3. Important react features
  - Component based architecture
  - Unidirectional data flow
  - Virtual DOM

## Review

1. After taking any questions students would like to go over, it will be worthwhile to review a few conceptual things about React.
   - React is a Javascript framework used to build front end user interfaces
2. Important React features
   - Component based architecture
      1. Websites are made out of individual components which are assembled to create views. These views are what the user sees and interacts with.
      2. This allows our code to be both modular and reusable. We are able to write the code for a component once and plug it in anywhere on our site
      3. React utilizes two types of components: class based and functional. Class based components house logic and state, functional components display information.
   - Unidirectional data flow
      1. Data can only flow from parent to child, not the other way around. This allows for better control of data.
   - Virtual DOM
      1. React leverages a virtual DOM as a middleman between our code and the actual DOM. This allows react to check for any changes that happen on the DOM and only update the parts that have actually changed
      2. This allows our apps to be more performant and efficient.

We'll now get started coding. After all the students have forked and cloned the above repo, delete everything in the `App.js` component and have them walk you through building the following:

```js
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="movie-list-title">The Most Amazing Movie List</h1>
    </div>
  )
}

export default App
```

Next have them delete everything in `App.js` and rebuild as a stateful component.

After this is finished, have them again delete everything in `App.js` and rebuild it as a functional component. This is meant to give the students practice building React components!

NOTE: The styles in App.css will handle the styling for this section.

We also want to create a List.js component. This will handle displaying and modifying our list of movies.

Have the students create a `Component` folder in the `src` folder and then create a `List.js` file in the `Component` folder they just created.

Next, have the students walk you through building the following:

```js
import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
    }
  }

  render() {
    return <div>I am the list component</div>
  }
}
export default List
```

Have the students delete everything in `List.js` and build it again for practice.

Next, import `List.js` into our `App.js` and display it:

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
