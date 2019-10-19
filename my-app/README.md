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

### extensions fo vs code

- Auto Import - ES6, TS, JSX, TSX

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

pass props or in case of more props we can also use object destructuring ({totalCounters})

# lifecycle phases

lifecycle phases of a compoenent:
Mount phase
instance of a component is created and insereted to the dom
Update phase
when we hange the state of the copomonent or give new props
Unmount phase
component is removed from the DOM

# lifecycle hooks

lifecycle hooks are methods that allow us to hook into certain lifecycle phases and to something

lifecycle hooks used in the mounting phase (displayed in order of calling):
constructor
render
componentDidMount

lifecycle hooks used in the render phase (displayed in order of calling):
render
componentDidUpdate

lifecycle hooks used in the unmount phase (displayed in order of calling):
componentWillUnmount

# mounting phase

everytime we add the constructor, we need to call the constructor of the base class super()

constructor()
in the constructor, we are allowed to change the state directly without using setState.
In fact if we use setState we will get an error

so we are allowed to do this:
this.state = this.props.something;

but in order to access this.props we need to pass props as the parameter to the constructor and the base constructor

componentDidMount()
is the perfect place to do ajax call do get data from the server and then update the state

# updating phase

componentDidUpdate() is called after a component is updated.
This is the right place to compare old data to new data.
this method takes two parameters prevProps, prevState

if (prevProps.counter.value !== this.props.counter.value) {
// ajax call to get new data
}

# unmounting phase

componentWillUnmount() is called just before the component is removed from the DOM
here is the right lpace to do any kind of cleanup, like timers or listeners

# pagination

itemsCount/pageSize = number of pages

we use lodash to create an array of 1 to pagesCount

# lodash

\_.range(1, pageCount+1).
We need to set +1 bc this method will not include tha last number itself

Math.ceil - returns an interegr greater or egual to the floating point number

in order to use the functions of lodash for an array like "items" we first wrap it to a lodash object
\_(items)

we update the state by updating the current page by every click on the pagination items.
we render data per page with paginate function. The new movie list gets generated and used in the render method. We can do this bc the render method gets called everytime we update the state

npm i prop-types@15.6.2 // for type checking
dodijelimo nasoj pagination class jos jedan property proptype i definisemo tip svim propovima
Pagination.propTypes

listGroup

initialize movies and genres to an empty array. And call fake services in componentDidMount
We are doing this bc it will take some time to get the data, and genres and movies need to be initialized

we use textProperty and valueProperty to make the component more generic

default props

we don't need to declare a variable when using setState

first filter all movies and then apply pagination

cmd + D -> multiselect

var chars = this.state.characters;
chars = \_.orderBy(chars, 'name', 'asc'); // Use Lodash to sort array by 'name'
this.setState({characters: chars})

we want to expose the logic from the handleSort method. So we move the moviesTable
from a functional to a class component with a method

we want to pass the whole sortOption, so we raise the onSort event in raiseSort()

we are extracting tableHeader to a component
the interface of this conmponent will be:
columns - the titles of the columns (array)
sortOption: object
onSort: function

### routing

for routing install library
npm i react-router-dom

import {BrowserRouter} from 'react-router-dom'

in jsx wrap the app component in BrowserRouter

<BowserRouter><App></BrowserRouter>

This component wraps the history object in browser and passes it down in aour component tree

### register a route

register route in a component-> import {Route} from 'react-router-dom'

we use the Route component and pass two props:
path // on this path
component // load this component

<Route path='/' component={Home}>
<Route path='/products' component={Products}>

The alghorithm for routing checks if the url starts with '/products'. Sadly both components will be rendered:
Home and Products

to fix this we can add the exact keyword

<Route path='/' exact component={Home}>

### Switch component

Another solution for this is to use the switch component
import {Route, Switch} from 'react-router-dom'
we use Switch to wrap the routes, we don't need the exact keyword
<Switch>
<Route path='/products' component={Products}>
<Route path='/' component={Home}>
</Switch>

now on /products only the Products component will be rendered.
When using switch we need to register the most sepcific one on the top.

### Link component

we use Link to specify links and prevent full page reload

insetad of 'href' we use 'to'

<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/products">Products</Link>
</li>

### Router props

by default additional information is passed down to the component

<Route path='/products' component={Products} />

but if we want to pass aditional props we use the following notation, we use the render method
<Route path='/products' render={props => <Products sortBy='example' {...props} />}

### Route parameters

syntax
:id in path

we can find the passed route parameter in the match object
{this.props.match.params.id}

for optional params use :id?

### Query string params

we should avoid passing optional params, instead it is best to use query string params
if we pass a query string in the url we can get the params from the location object
but in order to access them easily we can use the plugin
npm i query-string

### Redirect

for the redirect to work we need

- a registered route
- a redirect component

### Navigate back in history

this.props.history.push('/products')
we use .replace('/products') if we don't want the user to return ex. in login pages

- create 2 components
  customers
  rentals

for /xyz go to notfound

/ redirect to movies

in movies list the title should be a link and forward to the movieform component
onSave takes us back to the movies page

### Login

create component
register new route

### react refs

if we really need to access the Dom we can use react refr, but there is also a better way!
When using refs we first define a ref:

username = React.createRef(); // class prop

// usage in function
this.username.current.value
<input ref={this.username}>

### Forms

autofocus via class instead of code

<input autoFocus

# controlled elements

when dealing with data in forms we should rely on a single source of truth
--> on the state in the form. So the input files should not have their own state.
we make them beeing stateless with controlled elements,
which is the same as controlled components tj. components without state

These elements will not have their own state, we use props to set it's value

handle multiple inputs with bracket notation

# validation

is done with

- the errors object in the state
- this.validate() in the handleSubmit()

  const errors = this.validate();
  this.setState({ errors });

  we update the state - updateing the state causes rerending to happen
  and we will be abl to see the error messages instantly

  display validation messages
  {error && <div className="alert alert-danger">{error}</div>} // render div only if error has a value

  # validation on input change

  same approach as before, but we don't use this.validate, bc this will validate the whole form
  we want to validate a single input with this.validateProperty

  # validation using joi

  npm i joi-browser

  define schema object
  joi terminates validation as soon as it finds an error - this is called abortEarly, so we set it to false

  assign user friendly name with 'label'
  password: Joi.string()
  .required()
  .label('Password')
  };

  rewrite validateProperty()
  we dont want to hardcode username, so we use the computed property in ES6 [name]
  we will create a subschema for this method
  Joi.validate(obj, schema); returns a big object result.error.... so we take just error

# reusable form component

we want every form to have the errors property in the state object
we will create a new file form.jsx adn LoginForm will inherit from it

every form should have a data property in the state and an errors property in the state
state = { data:{}, errors:{} };
we don't need the render method, bc this Form component is not supposed to render anything

we can get the following params over the rest operator
value={value}
onChange={onChange}
type={type}

like this:
{...rest}

# new and edit from

ako postoji id u Url onda je edit form

moramo pristupiti data u nasoj formi i tako cemo populirati input fieldove

create new component and new method renderSelect
<label for="exampleFormControlSelect2">Example multiple select</label>
<select multiple class="form-control" id="exampleFormControlSelect2">

<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>

in schema id is not required bc when creating a new movie we don't have an Id

1. in componentDidMount we get the genres and update the genres in the state
2. check if new movie or existing, if new movie, then return (we won't populate the form with data)
3. get movieById, if movie is falsy, then this.props.match.history.replace('/not-found');
4. map to view model, bc data on the server is not what we display // map to schema
5. update state data: this.mapToViewModel
6. saveMovie() // from fake movieservice

### searchbox

from child to parent

const SearchBox = ({ onChange }) => {
return (

<div className='form-group'>
<input className='form-control' onChange={onChange} />
</div>
);
};

in parent// use arrow functions always
handleChange = event => {
console.log('handleChange', event.target.value);
this.setState({ searchQuery: event.target.value });

    //console.log(getMovieByTitle(event.target.value));

};
ja sam update state of movies u onChange metodi, a on je promjenio koliko s evraca filomvy u getpageData metodi

### http-app

npm install

### json placeholder

https://jsonplaceholder.typicode.com/

json view chrome extension

### sending http requests:

Fetch API
jQuery AJAX
Axios

npm i axios

the right place to get data is in ComponentDidMount()

axios.get returns a promise
promise - is a result of an async operation. an operation taht is going to ccomplete in the future

the response we get with axios.get has a data property

### Http Request methods

GET
POST
UPDATE
DELETE
OPTIONS// if the request comes from another domain ex. FE and BE are hosted on diff domains

Axios methods:
get,
post,
patch (update one or more properties) axios.put(apiEndpoint + '/' +post.id, post);
put (update all properties) axios.patch(apiEndpoint +'/', {title: post.title})
delete

// clone post
const posts = [...this.state.posts];
const postIndex = posts.indexOf(post);
posts[postIndex] = {...post}; // create new object, and spread post
this.setState({posts});

delete// get all data from state except the one obj we are deleteing. Update state

await axios.delete(apiEndpoint + '/' + post.id);
const posts = this.state.posts.filter(p => p.id !== post.id);
this.setState({ posts });

### optimistic vs pessimistic updates

# pessimistic

- call the server first and then update the state(UI)

# optimistic

- update the state (UI) first and then call the server.
- also write code in case calling the server goes wrong

### expected vs unexpected errors

# Expected (404: not found, 400: bad request) - Client errors

// - we are not logging these
// - display a specific error message

# Unexpected (network down, server down, db down, bug)

// - log them
// - display a generic and friendly error message

ex.response.status is a number not a string

ex.response.status === 404

### Axios interceptors

used to intercept requests and responses
if an error occures we log it in one place. The point of this is to log unexpected errors in one place
and not pulute the code and try catch blocks

axios.interceptors.response.use() - takes 2 params
2 params - 2 functions that will be called
1st function will be called when the response is successful
2nd function will be called if the response includes an error

axios.interceptors.response.use(success, error)

we will not intercept successful responses:
axios.interceptors.response.use(null, error)

expected errors: we only return a rejected promise and don't log the message
either way we return the rejected promise

### toast notifications

npm i react-toastify

import {ToastContainer} from 'react-toastify' // to get the component
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

### log errors mith logging as a service provider

- one of them is sentry. sign up at https://sentry.io
- npm i raven-js (maybe not needed bc of change in doucmentation)
- npm install @sentry/browser
  Sentry.captureException(error);

### homebrew

- package manager for mac OS

visit homebrew page + copy command:
/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew tap mongodb/brew

### mongo db

sudo mkdir -p /data/db
brew install mongodb/brew/mongodb-community

sudo mkdir -p /data/db

ad privilages to dir:
sudo chown -R `ìd -un` /data/db - nije propradilo
ali
sudo chown `id -u` /data/db - jeste

run mongo deamon:
mongod

node seed.js (napravio samo dvije mongo baze u vidly folderu)

node index.js (start the node app)

### movie service

POST /movies
PUT /movies/id
GET /movies/id
GET /movies/id
DELETE /movies/id

in the service

// if the movie has an Id - update it and get rid of the id

### register user

post user obj to localhost:3900/api/users

### login user

for login we send the credentials to

localhost:3900/api/auth

### jwt

get jwt from the awaited response
store jwt token in the local storage

the jwt comes with the response in the headers. it can be stored in the response upon user registration.
when a header stars with x - it is not part of the standard protocol
x-auth-token - header containing the token

we can whitelist the nonstandard header with:
.header("access-control-expose-header")

api-node command for mongodb:
mongod

jwt.io debugger
decode jwt in order to get the current user name without a roundtrip to the db

just as every update od the state will cause the component to rerender
this.setState({ user: currentUserObj });
we pass th curent user to Navbar

we use window.location = '/'; bcs componentDidMount only loads once, but we need
a full reload of the page after login

an exportet default can be importet with any name
