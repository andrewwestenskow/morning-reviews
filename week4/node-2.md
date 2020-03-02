# Week 4, Day 3 Review - Node 2

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/node-2
- Slides: https://slides.com/matias_perez/node-two

## Important Concepts to Review

1. Top-level Middleware
2. Post, Put, Delete endpoints
3. Postman

We will be continuing to use [this](https://github.com/andrewwestenskow/node-morning-reviews) repo, building on what we did [yesterday](node-1.md)

## Review

1. Ask for any questions that they have, it is likely that they will have a hard time contextualizing the previous day's afternoon project. Especially if they did not get to the section where they use the front end.
2. There are two ways to handle the rest of the review: If you feel that the students have a good grasp of the content,instruct them to create endpoints to post, put, or delete data (or all three) and give them a set amount of time. The idea is that their endpoints will be able to create a new user, edit an existing user, or delete a user. If you let them work on their own, they likely will not finish in the alloted time. The other option is to work through it with them, base your decision on their current understanding of the content.

However you decide to handle it you should eventually walk them through the following code, either coding with them or after the fact:

A few things to take specific note of:

> NOTE: Make sure you review body vs. params. Show them in the `index.js` how they set up the name of a param. Also, remind them that they determine the structure of the body but it is just an object with key value pairs. Many students have a hard time grasping the concept of the body so it may take a few times of explaining. Remind them that when we determine how the body should be structured as part of our endpoint function.

About the below code:

1. Previously we did not have `app.use(express.json())` because we did not have a body. We will need to add that for our `post` and `put` endpoints to work.
2. You can take this as a chance to talk about naming convention and RESTful principles if you have time.

```js
//index.js
const express = require('express')
const ctrl = require('./controller')

const app = express()
const port = 4338

app.use(express.json())

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:id', ctrl.getOneUser)
app.post('/api/users', ctrl.createUser)
app.put('/api/users/:id', ctrl.updateUser)
app.delete('/api/users/:id', ctrl.deleteUser)

app.listen(port, () => console.log(`Server running on port ${port}`))
```

A few things that should be noted about the below code:

1. Show them how we are using the users array to dynamically set the starting value of our `id` variable
2. In our `createUsers` function, explain to them that we are sending back the entire user object on the body as a property called `newUser`. When we send the request from postman or our front end, this property name will need to match.
3. Similarly, in our `updateUsers` function we are using a property called `updatedUser` this will need to match what is sent back on the body. This allows us to dynamically edit certain properties but not all of them.
4. In both of these cases, we could just send back `first_name`, `last_name`, and `email` as individual properties. If you have time, consider showing them the difference
5. As we build these functions, we should be testing them with Postman to familiarize the students with that process.
6. If you don't finish everything, you should slack out the finished code. We will be returning to it later.

```js
//controller.js

const users = require('../users.json')

let id = users[users.length - 1].id + 1

module.exports = {
  getAllUsers: (req, res) => {
    res.status(200).send(users)
  },

  getOneUser: (req, res) => {
    const { id } = req.params

    if (!id) {
      return res.status(404).send('Unable to find resource')
    }

    const user = users.find(user => user.id === +id)

    if (!user) {
      return res.status(500).send('Unable to find user')
    }

    res.status(200).send(user)
  },

  createUser: (req, res) => {
    const { newUser } = req.body

    newUser.id = id

    id++

    users.push(newUser)

    res.status(200).send(users)
  },

  updateUser: (req, res) => {
    const { updatedUser } = req.body
    const { id } = req.params

    const index = users.findIndex(element => element.id === +id)

    users[index] = { ...users[index], ...updatedUser }

    res.status(200).send(users)
  },

  deleteUser: (req, res) => {
    const { id } = req.params

    const index = users.findIndex(element => element.id === +id)

    users.splice(index, 1)

    res.status(200).send(users)
  },
}
```
