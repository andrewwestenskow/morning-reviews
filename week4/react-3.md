# Week 4, Day 1 Review - React 3 - Axios & HTTP Requests

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/react-4
- Slides: https://slides.com/matias_perez/react-four

## Important Concepts to Review

1. Client-Server Model
2. What is an HTTP Request? Why are they useful?
3. Promises in JavaScript
4. Axios
   - Get, Put, Post, Delete
   - Queries, Params, Body

## Review

- Begin the review by walking through the client-server model and talking through the concepts associated with requests and responses, JS promises, RESTful methods, the CRUD methodology, and using Axios to make server requests

- You can use [this](https://github.com/LucasSchaat/axios-morning-review) repo as a reference for the rest of this review. This review is meant to provide students additional practice making axios requests, while also reviewing React concepts including stateful components, props and component lifecycle methods. This review also largely uses the browser console to demonstrate that the requests are functioning correctly.

- First, have the students create a new react app. Then have the students replace the App.js functional component with a stateful component that initializes a property on state called `vehicles` as an empty array. You should also add a console.log to show students the initial value of vehicles on state.

```js
import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      vehicles: []
    }
  }

  render(){
    console.log(this.state.vehicles)
    return(
      <div>
        This is our App Component
      </div>
    )
  }
}

export default App
```

- Next, let's add a `componentDidMount` method to make an axios request to our server to update our vehicles array. The server that we will be using for this review will be the same server from the React-4 Axios mini project `Joe's Autos`: `https://joes-autos.herokuapp.com`. Once you set up the `componentDidMount` function, show in the browser console the value of the response object and the value of the updated vehicles array on state that is being set to the value of `response.data`. This can also be used as an opportunity to review the Component Lifecycle and the associated LifeCycle Methods.

```js
import React, {Component} from 'react'
import axios from 'axios'

class App extends Component{
  constructor(){
    super()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount(){
    axios.get("https://joes-autos.herokuapp.com/api/vehicles")
      .then(response => {
        console.log('response', response)
        this.setState({
          vehicles: response.data
        })
      })
      .catch(err => console.log(err));
  }

  render(){
    console.log(this.state.vehicles)
    return(
      <div>
        This is our App Component
      </div>
    )
  }
}

export default App
```

- Next, let's set up our `post` request in `App.js`. Be sure to demonstrate to students the importance of looking at API documentation to make sure that you are sending all of the correct information as part of this request. Create an `addVehicle` function that receives a newCar as a parameter and sends it as part of the `post` request.

```js
addVehicle(newCar){
    axios.post("https://joes-autos.herokuapp.com/api/vehicles", newCar)
      .then(response => {
        this.setState({
          vehicles: response.data
        })
      })
      .catch(err => console.log(err));
  }
  ```

- Next we will be creating a `Form` component that we will use to allow users to add a new car to the database. Have the students create a new `Form.js` file that we will import and render inside of our `App.js` component. Be sure to bind the `addVehicle` function before we pass it down to the `Form.js` component via props. This would be a good opportunity to review with the students the props object and function binding.

- The completed `App.js` component should be similar to the below:

```js
import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'

class App extends Component{
  constructor(){
    super()
    this.state = {
      vehicles: []
    }
    this.addVehicle = this.addVehicle.bind(this)
  }

  componentDidMount(){
    axios.get("https://joes-autos.herokuapp.com/api/vehicles")
      .then(response => {
        console.log('response', response)
        this.setState({
          vehicles: response.data
        })
      })
      .catch(err => console.log(err));
  }

  addVehicle(newCar){
    axios.post("https://joes-autos.herokuapp.com/api/vehicles", newCar)
      .then(response => {
        this.setState({
          vehicles: response.data
        })
      })
      .catch(err => console.log(err));
  }

  render(){
    console.log(this.state.vehicles)
    return(
      <div>
        This is our App Component
        <Form addVehicle={this.addVehicle}/>
      </div>
    )
  }
}

export default App
```

- Now, let's build out our `Form.js` component. This component should have 5 input boxes that collect the `make`, `model`, `year`, `color`, and `price` of our newCar to be added. It should also include a button that, when clicked, creates a newCar object that it will pass in as an argument into the `addVehicle` function invoked from props. It should also reset the values in each of the input boxes. Once this component is created, click the button in the application and show in the browser console how the vehicle array is updated when the button is clicked.

- The completed `Form.js` component should be similar to the below:

```js
import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0
        }
        this.addNewCar = this.addNewCar.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewCar(){
        console.log(this.state)
        const {make, model, year, color, price} = this.state
        const newCar = {make, model, year, color, price}
        this.props.addVehicle(newCar)
        this.setState({
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0
        })
    }

    render(){
        const {make, model, year, color, price} = this.state
        return(
            <div>
                <input name='make' value={make} onChange={e => this.handleChange(e)} placeholder='make'/>
                <input name='model' value={model} onChange={e => this.handleChange(e)} placeholder='model'/>
                <input name='year' value={year} onChange={e => this.handleChange(e)} placeholder='year' type='number'/>
                <input name='color' value={color} onChange={e => this.handleChange(e)} placeholder='color'/>
                <input name='price' value={price} onChange={e => this.handleChange(e)} placeholder='price' type='number'/>
                <button onClick={this.addNewCar}>Add Vehicle</button>
            </div>
        )
    }
}

export default Form
```

- Be sure to take your time reviewing these concepts for the students. Time permitting, you can use the rest of the review period to review the `put` and `delete` requests. Feel free to provide an example of a `put` and `delete` request that use request parameters or request query or both as part of the request - these may be requests that you conceptually explain instead of demonstrate in the application/code depending on time available in class. 