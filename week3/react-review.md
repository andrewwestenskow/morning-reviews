# React Review Review

Note: We will be finishing building our amazing movie list app which can be found at [this](https://github.com/andrewwestenskow/react-morning-reviews) repo. You can find a finished version on the `finished` branch.

## Concepts to review.

- The component lifecycle.
  - Before coding with everyone today. Review with them [this](https://miro.medium.com/max/2258/1*552z6hbX_b648DjpTLHZNg.png) graphic about the component lifecycle. Let them know that today's lecture (axios) will lean heavily on this concept and they should ask any questions they have about it now.
- We will also finish reviewing props and binding as well as flexing a bit of javascript logic to handle adding to and removing from our list of movies.

## Review

1. After talking about the component lifecycle. We will finish building out the logic in our movie list app.

First, we want to create a function to add movies to our list in our List component. Walk through with the students how to create it. Don't forget to also bind the function as we will be passing it as props.

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

At the end your List component should look like this:

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

We then want to edit our form component to have the logic to complete this action:

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

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

Lastly we will complete the logic to delete a movie. Walk your students through the logic of deleting a list item. Your ListItem component should look like this:

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
      <p onClick={() => props.deleteMovie(movie.id)} className="delete-button">
        X
      </p>
    </div>
  )
}

export default ListItem
```

Your movie list app should now be functional. This will give the students reference code for many fundamental topics in react.
