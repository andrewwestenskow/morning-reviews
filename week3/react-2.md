# React 2 Review

NOTE: We will be continuing building our project from yesterday. The base repo can be found [here](https://github.com/andrewwestenskow/react-morning-reviews). A finished version can be found on the `finished` branch.

## Concepts to review.

- Props will be the most important concept to review with students. Take the time to make sure they understand what props are and how to use them.

## Review

1. After taking questions, review with students the concept of props. Have them explain to you what they are, what can be passed as props, and how to access them.

After discussing props, we will build the following with the students.

Create a blank ListItem component with them:

```js
import React from 'react'
import './listItem.css'

function ListItem(props) {
  return <div className="List-Item">I am a list item</div>
}

export default ListItem
```

Import it into our List component and walk them through the following:

1. Importing our starting list of movies from our data folder
2. Mapping over the array to return a copy of ListItem for each movie in the array

```js
import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

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

Show them that to start, the text 'I am a list item' shows up 5 times because it is hard coded into the ListItem component. We'll now pass our information down as props. This is also a good time to show them the error stating that each item must have a unique key and to discuss what keys do. This is a great opportunity to reenforce the idea of the virtual DOM.

```js
import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

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

Finally, we will add this information to our ListItem component. Be sure to use the correct classNames to make everything display properly.

```js
import React from 'react'
import './listItem.css'

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

Finally, we will create a Form component to handle adding to our list. We will complete the logic of adding tomorrow but we'll build out the structure of the component today:

```js
import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      posterImg: '',
    }
  }

  render() {
    return (
      <form className="Form">
        <input name="title" placeholder="Title" />
        <input name="year" placeholder="Year" />
        <input name="posterImg" placeholder="Poster url" />
        <button type="submit">Add Movie</button>
      </form>
    )
  }
}
export default Form
```

Import it into our List component and render it at the top:

```js
import React, { Component } from 'react'
import ListItem from './ListItem'
import Form from './Form'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: movies,
    }
  }

  render() {
    const moviesMap = this.state.movies.map(movie => {
      return (
        <ListItem deleteMovie={this.deleteMovie} key={movie.id} movie={movie} />
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

We will finish plugging in the logic for this tomorrow.
