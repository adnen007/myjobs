## where to fetch the data

fetching data or ar any async operation should be done in one of two Event handler or useEffect. you can fetch the data whenever an event happen.

or you can fetch the data in the useEffect and use the dependency array of the useEffect to fetch data when ever a certain part of the state changed.

chick this link for more information https://stackoverflow.com/questions/49155438/react-redux-is-adding-async-method-in-a-reducer-an-anti-pattern#:~:text=Yes.,for%20redux%20to%20work%20efficiently.

- Always remmenber the reducer is only for manipulayting the state not for side effect or async operation (like fetching). for things like that use EventHandler or useEffect.

- Can I use useReducer and useSTate in the same time: answer there is no problem.

## the dependency error in useEffect

- useEffect when you use useEffect you have to put the dependency it of it in the dependency array. what is the dependencies any varaible that declared outside the useEffect and used inside it. like a
  state or a props or a function or a number it mainly any varaible delared outside it

but in the case that varaible was a function or object there will be a problem cause if the that function is not a part of the state as we know in each render a new fuction will create which will
cause the component to rerender which will lead the function to recreate and infinite loop

first you should understand it is important to don't igone that error check this link for more about that. https://www.bam.tech/en/article/how-to-avoid-bugs-in-useeffect

so you can do three things

1- if you don't really need the useEffect try to don't use it

2- if you will only use that function in the useEffect declare it in the useEffect

3- if you will use that funtion in other component memorise the funciton with useMemo or useCallback
