# Week 4, Day 2 Review - Node 1

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/node-1
- Slides: https://slides.com/matias_perez/node-one

## Important Concepts to Review

1. Vocabulary: node, express, npm, endpoint, request, status code, REST
2. NPM: Initializing, installing packages, .gitignore
3. Express: Building a server, constructing endpoints

We will be using [this](https://github.com/andrewwestenskow/node-morning-reviews) repo as the basis for our review. At the start it will only contain some dummy user data but we will build it out to be a back end with full CRUD that we can interact with through our endpoints.

## Review

- Start out by reviewing vocabulary with the students. Go over with them what node, express, and npm are. This could be a good time to discuss framework vs. library again.
- Once they have a decent understanding of those concepts we can move on to code with them. Try to have them walk you through the code as much as possible. Give them the idea of what we want to accomplish and then let them tell you how. Test every step of the way, console logs, making requests in the browser, and checking for errors will all be valuable here.

1. Run `npm init -y` and show them how this creates a `package.json` file
2. Create a server folder and place an `index.js`
   - You should also review with them the `"main"` property in the `package.json` file as well
3. Install express using npm and show them how this now creates a lockfile and a node_modules folder
   - Review .gitignore and show them how to include their node_modules in that file
4. Step by step, build out with them the following server file:

```js
//index.js
const express = require('express')

const app = express()
const port = 4338

app.listen(port, () => console.log(`Server running on port ${port}`))
```

4. Test the server using the `nodemon` command before moving on. Explain each step of the server and what it is doing.
5. We then want to build out our first endpoint and handler function:

```js
//index.js
const express = require('express')

const app = express()
const port = 4338

app.get('/api/users', (req, res) => {

})

app.listen(port, () => console.log(`Server running on port ${port}`))
```

6. Then we will build out the functionality of handler function. We will need to require our data and then instruct our endpoint to serve it up:

```js
//index.js
const express = require('express')
const users = require('../users.json')

const app = express()
const port = 4338

app.get('/api/users', (req, res) => {
  res.status(200).send(users)
})

app.listen(port, () => console.log(`Server running on port ${port}`))
```

7. If there is time you should also build out an endpoint to fetch a single user based on their id:
   This is a great time to review status codes, what they mean, and how they should be used.

```js
//index.js

const express = require('express')
const users = require('../users.json')

const app = express()
const port = 4338

app.get('/api/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params

    if (!id) {
      return res.status(404).send('Unable to find resource')
    }

    const user = users.find(user => user.id === +id)

    if (!user) {
      return res.status(500).send('Unable to find user')
    }

    res.status(200).send(user)
  })

app.listen(port, () => console.log(`Server running on port ${port}`))
```