# how to create or stucture the state

there are many ways or architecteurs to create the state. but they all share the same concept

- first know which components need to get the state and the components who should update the state.
- then make sure to create the state in a place where you can share with all the component they need it and usally this place will be in their parent or in the parent of the parent.

- finally pass the state to the component who need it and pass the fuction that update the state to the component that should update the state.

- so for the most basic architecture you only need the useState and you will declare updater functions in the component who owe the state (to keep all the logic of updating the state in the same
  place) then you will pass the state and the updater throught the props

- for more advanced architecture you will need useReducer with context api. instead of using props to pass the state and the updater to upadate the state you will use the context and the dispatch.

- the concept is the same but with different tools for example you will also declare the state (with useReducer) in the parent and pass the state and the function that update the state to the children
  but instead of creating updater in the parent component you will create all the concept of edting the state in the reducer function and pass the dispatch function to run the reducer and instead of
  passing the state and the updater with the props you will pass them with the context.
