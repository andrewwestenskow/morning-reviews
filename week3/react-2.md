# Week 3, Day 4 Review - React 2

NOTE: In this review, we will continue building our project from the React 1 Review. The base repo can be found [here](https://github.com/LucasSchaat/react-morning-reviews). You can find a finished version of the app [here](https://github.com/WLH17/react-morning-reviews). In this portion of the review, we will continue building out our application to display each of the movies in our movies array.

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/react-2
- Slides: https://slides.com/matias_perez/react-two

## Important Concepts to Review

1. Props will be the most important concept to review with students. Take the time to make sure they understand what props are and how to use them.

## Review

1. After taking questions, review with students the concept of props. Have them explain to you what they are, what can be passed as props, and how to access them.

After discussing props, we will build the following with the students in the react-morning-reviews project:

Create a `ListItem.js` file in the `Components` folder and create a blank `ListItem` component:

```js
import React from 'react'

function ListItem() {
  return <div className="List-Item">I am a list item</div>
}

export default ListItem
```

Import it into our `List` component and walk them through the following:

1. Importing our starting list of movies from our data folder
2. Mapping over the array to return a copy of `ListItem` for each movie in the array

```js
import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'

class List extends Component {
  constructor() {
    super()

    this.state = {
      movies: movies,
    }
  }

  render() {
    const moviesMap = this.state.movies.map(movie => {
      return <ListItem />
    })
    return <div className="List">{moviesMap}</div>
  }
}
export default List
```

Show them that to start, the text 'I am a list item' shows up 5 times because it is hard coded into the `ListItem` component. We'll now pass our information down as props. This is also a good time to show them the error stating that each item must have a unique key and to discuss what keys do. This is a great opportunity to re-enforce the idea of the virtual DOM.

```js
import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'

class List extends Component {
  constructor() {
    super()

    this.state = {
      movies: movies,
    }
  }

  render() {
    const moviesMap = this.state.movies.map(movie => {
      return <ListItem key={movie.id} movie={movie} />
    })
    return <div className="List">{moviesMap}</div>
  }
}
export default List
```

Next, we will add this information to our `ListItem` component. Be sure to use the correct `className`s to make everything display properly.

```js
import React from 'react'

function ListItem(props) {
  const { movie } = props
  return (
    <div className="List-Item">
      <img alt={movie.title} className="movie-poster" src={movie.posterImg} />
      <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.year}</p>
      </div>
    </div>
  )
}

export default ListItem
```

Finally, we will create a `Form` component to handle adding to our list. We will complete the logic of adding tomorrow but we'll build out the structure of the component today:

```js
  import React, { Component } from 'react'

  class Form extends Component {
    constructor() {
      super()
      this.state = {
        title: '',
        year: '',
        posterImg: '',
      }
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    render() {
      return (
        <form className="Form">
          <input name="title" onChange={this.handleChange} placeholder="Title" />
          <input name="year" onChange={this.handleChange} placeholder="Year" />
          <input
            name="posterImg"
            onChange={this.handleChange}
            placeholder="Poster url"
          />
          <button type="submit">Add Movie</button>
        </form>
      )
    }
  }

  export default Form
```

Lastly, let's import it into our `List` component and render it at the top:

```js
import React, { Component } from 'react'
import ListItem from './ListItem'
import Form from './Form'
import movies from '../data/movies.json'

class List extends Component {
  constructor() {
    super()

    this.state = {
      movies: movies,
    }
  }

  render() {
    const moviesMap = this.state.movies.map(movie => {
      return (
        <ListItem key={movie.id} movie={movie} />
      )
    })
    return (
      <div className="List">
        <Form />
        {moviesMap}
      </div>
    )
  }
}
export default List
```

We will finish the rest of the application tomorrow.
