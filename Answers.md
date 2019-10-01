1. What problem does the context API help solve?
Context API help us by globalizing the state in order to shared between different component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions - Is an object which describes what sort of transformation you want to make to your state
Reducers -you can create a reducer to manage not only each section of your Redux store.
Store- Is everything that changes within the application is the store. the store contains the state wrapped into a single Js function. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. libraries like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it so long as they hook into it.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite one is the use of context API, but for the creation of this Sprint is better to use Redux, even tho Redux is more complicated that Context API. Redux does a better on managing State by creating what we so called the Store tree. 