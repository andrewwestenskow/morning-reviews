# Week 5, Day 5 Review - React 4 - Routing

This morning review may or may not be delivered at this point of the course schedule - depending on how and when the second Skills Check is administered. Typically, students are given the entirety of the day on this scheduled day of the course to work on the second Skills Check. If this is the case, this review would probably best be delivered during the morning review of the next lecture day of class (i.e., during the Week 6, Day 1 morning review).

Regardless of when this is delivered, try to structure the review around the students' questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/react-5
- Slides: https://slides.com/matias_perez/react-five/

## Important Concepts to Review

1. What is routing? Why is it useful?
2. The Pattern of Routing
   1. Router (HashRouter or BrowserRouter)
   2. Switch, Route, and Link

## Review

This review will be using [this](https://github.com/LucasSchaat/routing-morning-review) repo as the launching point for the review. The repo provides a basic server, get endpoint, and sample data for building out a React frontend. Although the focus of the review is on the routing concept, feel free to add some design to the code as it is built out.

The finished repo code can be found in the same repo as above under the 'Completed Review Code' commit message.

1. To begin, have the students fork and clone the repo above. Once they have done that, have them open the project and run `npm install` at the root of the project.

2. Next, let's install the packages that we will need to set up our routes and make our axios request to the backend. To do this, we will need to run `npm install react-router-dom axios` at the root of our project.

3. Next, we will wrap our app in the `HashRouter` tag, so as to provide routing functionality throughout our application. In the `index.js` file in the `src` folder, import `HashRouter` from react-router-dom and wrap the `<App/>` component in the `HashRouter` component. The code for `index.js` should look like the below:

    ```js
    // src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import {HashRouter} from 'react-router-dom'
    import * as serviceWorker from './serviceWorker';

    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.getElementById("root")
    );
    ...
    ```

4. Before we start coding, let's set up our `Components` folder in our `src` folder. Inside of `Components` let's create three component files, `Header.js`, `Landing.js`, `Profile.js`.

5. Now let's create a `routes.js` file in the `src` folder. This file will house the routes to each of our components and will be imported into our `App.js` file. You will note that the route for the `Profile` component takes in two parameters that we will use to dynamically change the information displayed in our `Profile` component. The code for the `routes.js` file should be something like the below:

    ```js
    // routes.js
        import React from 'react'
        import {Switch, Route} from 'react-router-dom'
        import Landing from './Components/Landing'
        import Profile from './Components/Profile'

        export default (
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/meet-me/:first/:last' component={Profile} />
            </Switch>
        )
    ```

6. Now let's go into `App.js` and build out that component. We will import here our `routes` file and our `Header.js` file. You will note here that by placing the `Header` component in `App.js`, the `Header` component will always display throughout our application.

    ```js
    // App.js
    import React from 'react';
    import './App.css';
    import Header from './Components/Header'
    import routes from './routes'

    function App() {
        return (
            <div className="App">
                <Header />;
                {routes}
            </div>
        );
    }

    export default App;
    ```

7. Next, let's build out our `Header.js` component. In this component, we will be adding a `link` to route back to our `Landing` component. The code for this component will look something like the below:

    ```js
    // Header.js
    import React from 'react'
    import {Link} from 'react-router-dom'

    function Header() {
        return(
            <div className='header'>
                <h2>NiceToMeetMe</h2>
                <Link to='/'>{`< Back to the Conference Room`}</Link>
            </div>
        )
    }

    export default Header
    ```

8. Now, let's build out our `Landing` component. In this component, we will be adding in `link`'s to bring up the profile information for each of the different characters in our dataset. Notice that each link `path` sends us to a different location in our application - this can be seen in the browser url when we select a new character. These dynamic urls are going to be the tools that we use to display the information specific to each character in our `Profile` component.

    ```js
    // Landing.js
    import React from 'react'
    import {Link} from 'react-router-dom'

    function Landing(){
        return (
                <div className="landing">
                    <h1>
                        Everyone is in the Conference Room. <br />
                        Who would you like to meet?
                    </h1>
                    <Link to="/meet-me/Michael/Scott">Michael Scott</Link>
                    <Link to="/meet-me/Dwight/Schrute">Dwight Schrute</Link>
                    <Link to="/meet-me/Jim/Halpert">Jim Halpert</Link>
                    <Link to="/meet-me/Phyllis/Vance">Phyllis Vance</Link>
                    <Link to="/meet-me/Stanley/Hudson">Stanley Hudson</Link>
                    <Link to="/meet-me/Pam/Beesly">Pam Beesly</Link>
                    <Link to="/meet-me/Kevin/Malone">Kevin Malone</Link>
                </div>
            );
    }

    export default Landing
    ```

9. Finally, let's build out our `Profile` component. We will be using the `props.match.params` object to access the first and last name of the character whose information we want to request from the server - this information will be coming from the browser url and will be passed as part of the get request in the `componentDidMount` function.

    ```js
    // Profile.js
    import React, {Component} from 'react'
    import axios from 'axios'

    class Profile extends Component{
        constructor(){
            super()
            this.state = {
                characterDetails: {}
            }
        }

        componentDidMount(){
            const {first, last} = this.props.match.params
            axios.get(`/api/${first}/${last}`)
            .then(res => this.setState({
                characterDetails: res.data
            }))
        }

        render(){
            const {firstName, middleName, lastName, bestQuote, image} = this.state.characterDetails
            return(
                <div className='profile'>
                    <img src={image} alt={`${firstName} ${lastName}`} />
                    <h2>{`${firstName} ${middleName} ${lastName}`}</h2>
                    <h3>{bestQuote}</h3>
                </div>
            )
        }
    }

    export default Profile
    ```

NOTE: Be sure to explain the code as you create each component - focusing on the routing concepts, especially the props objects that are used as part of the dynamic routing.