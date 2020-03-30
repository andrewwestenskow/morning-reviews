# Week 6, Day 3 Review - Node 4 Cookies, Sessions and Authentication

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

Old Node 4 - Cookies & Sessions
- Notes: https://github.com/WLH-16/node-4

Old Node 5 - Authentication
- Notes: https://github.com/WLH-16/node-5-deprecated

- Slides: https://slides.com/matias_perez/sessions-cookies-authentication

## Important Concepts to Review

1. Request-Level Middleware
2. Cookies
3. Sessions
4. Express-Session
5. Authentication
6. Bcrypt

## Review

This review will be using [this](https://github.com/LucasSchaat/node4-morning-review) repo as the launching point for the review. The repo provides a fully functioning React frontend and requires work on the backend to set up a server, connect it to a database, set up sessions, and create the endpoints that will allow a user to register, login, and logout. Depending on how long it takes to walk through this review, it may also be helpful for students to spend time walking through the logic for how the React components are built in the frontend (e.g., props.match.params, routing, etc.).

The finished repo code can be found in the same repo under the 'functioning front end' commit message.

1. To begin, have the students fork and clone the repo above. Once they have done that, have them open the project and run `npm install` at the root of the project. This install will install all of the packages needed for this app to function.

2. For practice in building out the server and understanding the packages that they will need to do that, have the students run `npm install express cors dotenv massive express-session bcryptjs`. This will re-install the following packages needed to get the server connected and working correctly with the front end:
    - Express
    - Cors
    - Dotenv
    - Massive
    - Express-Session
    - Bcrypt

3. Let's first build out our folder structure for our backend.
    - At the root of the project add a `db` directory
    - At the root of the project add a `server` directory
    - Inside the `server` directory add a `controllers` directory
    - Inside the `server` directory add a `middleware` directory
    - Inside the `server` directory add an `index.js` file
    - Inside the `controllers` directory add an `authController.js` file
    - Inside the `middleware` directory add a `middleware.js` file

4. Let's begin coding by building out the framework for a basic server - similar to the below - in `index.js`. Students should feel very comfortable with this step.

    ```js
    // index.js
    const express = require('express')
    const cors = require('cors')

    const SERVER_PORT = 3999

    const app = express()

    app.use(cors())
    app.use(express.json())

    app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))

    ```

5. Next, let's set up a `.env` file to store our server port and connection string variables - MAKE SURE TO ADD THIS FILE TO YOUR GITIGNORE FILE

    ```js
    // .env
    SERVER_PORT = 3999
    CONNECTION_STRING = heroku.url
    ```

6. Let's now update our `index.js` file to allow us to use these `.env` variables and to also use the masssive connection to connect to our database

    ```js
    // index.js
    require('dotenv').config()
    const express = require('express')
    const cors = require('cors')
    const massive = require('massive')

    const {SERVER_PORT, CONNECTION_STRING} = process.env

    const app = express()

    app.use(cors())
    app.use(express.json())

    massive({
        connectionString: CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
    }).then(db => {
        app.set('db', db)
        console.log('DB connected')
        app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))
    })
    ```

7. Next, let's get our server session set up using the express-server package. For this, we are going to want to create a `SESSION_SECRET` variable in our `.env` file and then use that to set up our session information in our server.

    ```js
    // .env
    SERVER_PORT = 3999
    CONNECTION_STRING = heroku.url
    SESSION_SECRET = 'whatever secret information you want to put here'
    ```

    ```js
    // index.js
    require('dotenv').config()
    const express = require('express')
    const cors = require('cors')
    const massive = require('massive')
    const session = require('express-session')

    const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }))

    massive({
        connectionString: CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
    }).then(db => {
        app.set('db', db)
        console.log('DB connected')
        app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))
    })
    ```

8. If these files have been setup correctly, we should be able to go into our `package.json` file, add a `main` property, and then run nodemon at the root of our project to see it running and connected to a server. Make sure to stop and make sure all of the students are caught up. You can also use this as an opportunity to teach students about sessions, cookies and the express-session package.

9. Next, we are going to be creating our registration endpoint for authentication. Let's start by creating our endpoint in our `index.js` file. In this endpoint we will be using a middleware function as well as a function from our `authController.js` file. In order for us to access these functions, we need to require those files and build our endpoint like so:
    
    ```js
    // index.js

    // Require in these files at the top of your server 
    const middleware = require('./middleware/middleware')
    const authCtrl = require('./controllers/authController')

    // Create your endpoints at the bottom of the server file starting with the registration post request
    app.post('/auth/register', middleware.checkUsername, authCtrl.register)

    ```

10. Now let's build a middleware function that we will use to make sure that the user passes in a valid email address for their username (this will just be a superficial check to see if they included an `@` or `.` character in the username they typed in) - see code below. After building this functionality, talk about the purpose of middleware and how this request-level middleware is different than the top-level middleware that students have been exposed to.

    ```js
    // middleware.js
    module.exports = {
        checkUsername: (req, res, next) => {
            if (req.body.username.includes('@') && req.body.username.includes('.')) {
                next()
            } else {
                res.status(403).send('Invalid Email Address')
            }
        }
    }

    ```

11. Next, let's setup our `db` PostgreSQL files that we will be using as part of our registration functionality. In the `db` directory, let's create three files: `init.sql`, `check_user.sql`, and `register_user.sql`. The code for these files are included below.

    ```js
    // init.sql
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(250),
        password VARCHAR(3000)
    );
    ```

    ```js
    // check_user.sql
    SELECT * FROM users
    WHERE username = $1;
    ```

    ```js
    // register_user.sql
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING *;
    ```

12. Now, let's create our registration functionality. Here we will be checking to see if the username is available (i.e., unique) and if so we will be using the bcrypt package to salt and hash the password saved to the database. As you code through this, make sure that you explain what is going on step-by-steps for students - be sure to explain async and await if students have questions about it. Also, you should explain to students that this code is pretty boilerplate and should be easy for them to implement if they stick to this formula.

    ```js
    // authController.js
    const bcrypt = require('bcryptjs')

    module.exports = {
        register: async (req, res) => {
            const { username, password } = req.body;
            const db = req.app.get("db");
            
            let user = await db.check_user(username);
            if (user[0]) {
                return res.status(400).send("Email already exists");
            }

            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);
            let newUser = await db.register_user(username, hash);
            
            req.session.user = newUser[0];
            delete req.session.user.password;
            res.status(201).send(req.session.user);
        }
    };
    ```

13. After using SQL Tabs to create the table, use Postman to check to see if the registration endpoint works and if you can successfully register a person in your database

14. Next, let's build out the login functionality. Again, we are going to want to use the middleware function on this to check the username value to make sure it is a valid email. After that, we will be checking the username to see if it exists in the database and if the password after being salted and hashed matches the password saved in the database, if so then we will be sending back that user's information to the frontend.

    ```js
    // index.js
    app.post('/auth/login', middleware.checkUsername, authCtrl.login)
    ```    

    ```js
    // authController.js
    const bcrypt = require('bcryptjs')

    module.exports = {
        register: async (req, res) => {
            ...
        },
        login: async (req, res) => {
            const { username, password } = req.body;
            const db = req.app.get("db");

            let user = await db.check_user(username);
            if (!user[0]) {
                return res.status(400).send("Email not found");
            }

            let authenticated = bcrypt.compareSync(password, user[0].password);
            if (!authenticated) {
                return res.status(401).send("Password is incorrect");
            }

            delete user[0].password;
            req.session.user = user[0];
            res.status(202).send(req.session.user);
        }
    };
    ```

15. Now let's use Postman to check to see if a user we created in the last step can login correctly

16. Now that we have register and login completed, let's add the logout functionality and some additional functionality to check to see if someone is already logged in. This will make it so that if someone is logged in already, the front end can know that and will then redirect people away from various views or routes in their application that they don't need to go to (e.g., the login or registration views, etc.).

    ```js
    // index.js
    app.post('/auth/logout', authCtrl.logout)
    app.get('/api/user', authCtrl.getUser)
    ```    

    ```js
    // authController.js
    const bcrypt = require('bcryptjs')

    module.exports = {
        register: async (req, res) => {
            ...
        },
        login: async (req, res) => {
            ...
        },
        logout: (req, res) => {
            req.session.destroy();
            res.sendStatus(200);
        },
        getUser: (req, res) => {
            if(req.session.user){
                res.status(200).send(req.session.user)
            } else {
                res.status(204).send("Please log in")
            }
        }
    };
    ```

17. As a final step, you can check both of these endpoints using Postman. Login / Register and then check to see that the user information is saved to a session using the `get` endpoint. Then logout using the logout endpoint and use the `get` endpoint to check to make sure that user's information was actually removed from the session after logging out.

18. After all of this has been done, run `npm start` in a new terminal to get the front end running. See each of the endpoints work by logging in or registering and then being directed to the `Home` component. Try logging out and then going back to the `Landing` component, you should be able to click on register or login. Once registered/loggedin, if you try navigating to the landing page, you will be redirected away from it because someone is already logged in. Helping students see and understand this flow will be super helpful for them come personal project time.
