# Week 5, Day 4 Review - Node 3

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/node-3
- Slides: https://slides.com/matias_perez/node-three

## Important Concepts to Review

1. What is massive? Why is it useful? Why do we want to connect our app to a database?
2. Massive Syntax
   - Connecting to DB
   - `ssl` Setup
   - Setting `db`
3. Setting up `.env` File
4. Using SQL Tabs
5. Adding SQL Statement Files in Application

## Review

This exercise will consist of taking a standalone server application with functioning endpoints / data management, connecting it to a database, and then transferring the data storage from the server to the database. The initialized code base for this review can be found [here](https://github.com/LucasSchaat/node3-massive-morning-review) - have the students fork and clone this version and then run `npm install` at the root of their project. 

The final version of the code for this review can be found [here](https://github.com/LucasSchaat/node3-massive-morning-review-solved).

As you and the students will note, the server is already setup with functioning endpoints and handler functions. Feel free to run nodemon in the terminal and test each of the endpoints with the students using Postman. The students should already feel comfortable with this setup, but make sure they are before moving on with this review.

Now that we have tested the server, let's connect it to a database following these steps:

1. Run `npm install massive dotenv` in the terminal at the root of the project. Use this as an opportunity to discuss Massive and .env files
    - Massive is a data mapping package for Node.js that allows us to interact with a PostgreSQL Database through our server
    - Dotenv and `.env` files are environment packages / files that are saved locally and are designed for storing sensitive information necessary for your application
        
2. Require in the `dotenv` package at the top of the server file:
    
    ```js
    require('dotenv').config()
    ```

3. Require in the `Massive` package:

    ```js
    const massive = require('massive')
    ```

4. Next let's create a `.env` file at the root of our project to save our `SERVER_PORT` and `CONNECTION_STRING` information:

    ```js
    SERVER_PORT = 3322
    CONNECTION_STRING = herokuDB.url
    ```

5. Now that we have set up our `.env` file, let's bring those variables into our `index.js` file so we can use them to connect to the Heroku database and to get our application up and running. (Remember: The server already has a variable called `SERVER_PORT`, so you will have to delete that variable at this time):

    ```js
    const {SERVER_PORT, CONNECTION_STRING} = process.env
    ```

6. The last thing that we need to do to connect to our Heroku database is to invoke `massive`, passing in the `CONNECTION_STRING` as an argument and then using a `.then` method to set the db in our server:

    ```js
    massive({
        connectionString: CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
    })
    .then(db => {
        app.set('db', db)
        console.log('db connected')
    })
    ```

    - If you are running nodemon in your terminal, you should see both `Server running on Port: 3322` and `db connected` showing up in the console

7. The updated code for the `index.js` file is included below:

    <details>
    <summary>Index.js</summary>
     

    ```js
    require('dotenv').config()
    const express = require("express")
    const cors = require("cors")
    const massive = require('massive')
    const cc = require("./controllers/characterController")
    const {SERVER_PORT, CONNECTION_STRING} = process.env

    const app = express()

    app.use(cors())
    app.use(express.json())

    massive({
        connectionString: CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
    }).then(db => {
        app.set("db", db);
        console.log("db connected");
    })

    app.get('/api/characters', cc.getAllCharacters)
    app.get('/api/character/:id', cc.getCharacter)
    app.post('/api/characters', cc.addCharacter)
    app.put('/api/characters/:id', cc.editCharacter)
    app.delete('/api/characters/:id', cc.deleteCharacter)

    app.listen(SERVER_PORT, () => console.log(`Server listening on Port: ${SERVER_PORT}`))
    ```
    </details>

8. Next, we are going to want to set up a `db` folder at the root of our directory. In that folder, we are going to create an `init.sql` file where we are going to store the code for creating our `characters` table in our database. That code is included below:

    ```js
    CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    image VARCHAR(3000)
    );
    ```

<strong>Note: The following review steps are suggested for continuity in building `.sql` statements, but if it makes more sense to build out each endpoint individually, feel free to approach it that way.</strong>

9. Next, we are going to want to create `.sql` files that will be used to interact with our database as part of the requests being received by the server. The code for each of these files is included below. Feel free to use SQL Tabs to test out the command syntax before placing it in these files.

    <details>
    <summary>get_all_characters.sql</summary>
    
    ```js
    SELECT *
    FROM characters;
    ```
    </details>

    <details>
    <summary>get_character.sql</summary>
    
    ```js
    SELECT *
    FROM characters
    WHERE id = $1;
    ```
    </details>

    <details>
    <summary>add_character.sql</summary>
    
    ```js
    INSERT INTO characters (name, image)
    VALUES (${name}, ${image})
    RETURNING *;
    ```
    </details>

    <details>
    <summary>edit_character.sql</summary>
    
    ```js
    UPDATE characters
    SET name = $2,
        image = $3
    WHERE id = $1
    RETURNING *;
    ```
    </details>

    <details>
    <summary>delete_character.sql</summary>
    
    ```js
    DELETE FROM characters
    WHERE id = $1;
    ```
    </details>

10. Now, let's connect each of these `.sql` files to the corresponding requests in our `characterController.js` file. Take time to walk through each step to help students understand how each request is being handled and how information is being received from the database. The goal here is to help students feel comfortable with the dataflow and syntax. Completed code for the `characterController.js` file is included below:
    <details>
    <summary>characterController.js</summary>
     

    ```js
    module.exports = {
        getAllCharacters: (req, res) => {
            const db = req.app.get('db')
            db.get_all_characters()
            .then(characters => res.status(200).send(characters))
            .catch(err => res.status(500).send(err))
        },
        getCharacter: (req, res) => {
            const {id} = req.params
            const db = req.app.get('db')
            db.get_character(id)
            .then(character => res.status(200).send(character))
            .catch(err => res.status(500).send(err))
        },
        addCharacter: (req, res) => {
            const character = {...req.body}
            const db = req.app.get('db')
            db.add_character(character)
            .then(character => res.status(200).send(character))
            .catch(err => res.status(500).send(err))
        },
        editCharacter: (req, res) => {
            const {id} = req.params
            const {name, image} = req.body
            const db = req.app.get('db')
            db.edit_character(id, name, image)
            .then(character => res.status(200).send(character))
            .catch(err => res.status(500).send(err))
        },
        deleteCharacter: (req, res) => {
            const {id} = req.params
            const db = req.app.get('db')
            db.delete_character(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
        }
    }
    ```
    </details>

11. The final step in this review is to test each of the endpoints in Postman to make sure that they are working and responding correctly. If the endpoints are not working correctly, feel free to refer to the included step-by-step code above or to the finished repo included above.
