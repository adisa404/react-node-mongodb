This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

starting app on may. npm install. update package-lock.json. single quotes

const { length: count } = this.state.movies;
takes movies length. count is the name of the constant

!!!props includes data that we give to a component. also prop is readonly
!!!state includes data that is local or private to a component

in counter.jsx we use props to initialize the state

add delete button to every counter

the component owning the piece of the state should be the one modifying it

we should have state only in one component. Ex : in counters and not in both counter and counters.
in the child component we should only rely on the props. This is called 'controlled' component
bc it doesn't have it's local state.

naming convention
onDelete in component that rasises the event
handleDelete() in component that handles the event

pass parameter to method in jsx with arrow function

single source of truth, not having state in every component. we will move all the state to the counters component

component without a state - controlled component

copied navbar from bootstrap

if we want to share values between components that have no relationship,
we have to lift the state up into the component that contains both of them.
This means we are moving all methods that handle the state up.
We need to pass these methods down as props

sfc shortcut
stateless functional components - nacin kako se definisu componente bes state.
Razlika je u definiciji jer se umjesto klase koristi funkcija

function NavBar = ()=> {
return jsx itd
}

ralika je u tome sto ne mozemo koristiti this.prop.bla,
nego u () moramo staviti prop koji smo dobili npr activity i tako mu pristupamo activity.id
