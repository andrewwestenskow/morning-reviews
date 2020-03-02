# Week 3, Day 5 Review - React Review

NOTE: In this review, we will continue building our project from the React 1 & 2 morning reviews. The base repo can be found [here](https://github.com/LucasSchaat/react-morning-reviews). You can find a finished version of the app [here](https://github.com/WLH17/react-morning-reviews). In the final portion of the review, we will be creating the functionality for adding to and deleting from this list of movies.

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

<!-- - Notes: -->
- Slides: https://slides.com/matias_perez/react-three

## Important Concepts to Review

1. The Component Lifecycle
  - Before coding with everyone today, review with them [this](https://miro.medium.com/max/2258/1*552z6hbX_b648DjpTLHZNg.png) graphic about the Component Lifecycle. Let them know that today's lecture (axios) will lean heavily on this concept and they should ask any questions they have about it now.
- We will also finish reviewing props and binding as well as flexing a bit of JavaScript logic to handle adding to and removing from our list of movies.

## Review

1. After talking about the Component Lifecycle. We will finish building out the logic in our movie list app.

To begin, we want to create a function to add movies to our list in our `List` component. Walk through with the students how to create it. Don't forget to also bind the function as we will be passing it as props.

```js
addMovie(title, year, posterImg) {
    const id = this.state.movies[this.state.movies.length - 1].id + 1
    const newMovie = { id, title, year, posterImg }
    const newArr = [...this.state.movies, newMovie]

    this.setState({
      movies: newArr,
    })
  }
```

We also want to create a function to delete a movie from our list. This must also be bound.

```js
deleteMovie(id) {
    const index = this.state.movies.findIndex(movie => movie.id === id)
    const newArr = [...this.state.movies]
    newArr.splice(index, 1)
    this.setState({
      movies: newArr,
    })
  }
```

At the end, your `List` component should look like this:

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

    this.addMovie = this.addMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  addMovie(title, year, posterImg) {
    const id = this.state.movies[this.state.movies.length - 1].id + 1
    const newMovie = { id, title, year, posterImg }
    const newArr = [...this.state.movies, newMovie]
    this.setState({
      movies: newArr,
    })
  }

  deleteMovie(id) {
    const index = this.state.movies.findIndex(movie => movie.id === id)
    const newArr = [...this.state.movies]
    newArr.splice(index, 1)
    this.setState({
      movies: newArr,
    })
  }

  render() {
    const moviesMap = this.state.movies.map(movie => {
      return (
        <ListItem deleteMovie={this.deleteMovie} key={movie.id} movie={movie} />
      )
    })
    return (
      <div className="List">
        <Form addMovie={this.addMovie} />
        {moviesMap}
      </div>
    )
  }
}
export default List
```

We then want to edit our `Form` component to have the logic to complete this action:

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      posterImg: '',
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(e) {
    e.preventDefault()
    this.props.addMovie(this.state.title, this.state.year, this.state.posterImg)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleAdd} className="Form">
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

Test this with the students.

Lastly we will complete the logic to delete a movie. Walk your students through the logic of deleting a list item. Your `ListItem` component should look like this:

```js
import React from 'react'

function ListItem(props) {
  const { movie, deleteMovie } = props
  return (
    <div className="List-Item">
      <img alt={movie.title} className="movie-poster" src={movie.posterImg} />
      <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.year}</p>
      </div>
      <p onClick={() => deleteMovie(movie.id)} className="delete-button">
        X
      </p>
    </div>
  )
}

export default ListItem
```

Your movie list app should now be functional. This will give the students reference code for many fundamental topics in React.
