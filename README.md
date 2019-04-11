This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create this project

### npx create-react-app my-app --typescript

Create a project along with Typescript

### npm install redux react-redux redux-thunk 

## npm install --save @types/react-redux

We will use redux to manage state (Provider -> store -> createStore -> combineReducers).

We also use container component to connect presentational component to Redux. "connect", "mapStateToProps", "mapDispatchToProps"

We choose Formik https://github.com/jaredpalmer/formik as form submit library.

There are some popular form libraries at that time. For example, 
React Redux Form https://github.com/davidkpiano/react-redux-form
Redux Form https://github.com/erikras/redux-form
React Final Form https://github.com/final-form/react-final-form

Formik is the winner of balancing easy usage and performance at that time.
npm install formik --save

We also use yup as validator to work with Formik. https://github.com/jquense/yup
npm install yup @types/yup 

As a SPA, we will use "React Router" to route our application

npm install --save react-router-dom

For async action feature, we will use Redux-Thunk middleware. Instead of returning action object from action creator, return a function, which can do anything inside.

we also evaluate Promise vs async/await. Fetch vs juqery ajax/axios.

Example: we will use "axios" to request Adelaide current weather from "OpenWeatherMap" API.

A explaination of JSX in React. 

Babel compiles JSX down to React.createElement() call.
~~~~
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
~~~~
React.createElement() create an object like this:

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

React will read this object and use them to construct the DOM.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
