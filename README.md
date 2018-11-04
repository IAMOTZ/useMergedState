# useMergedState
A replica of the [React State Hook](https://reactjs.org/docs/hooks-state.html) with the power of merging states. 

## What is React State Hook?
If you already know about React Hooks, you can skip this section and if not, continue reading.  
The best way I think you can actually learn about Hooks is to watch [this video](https://www.youtube.com/watch?v=V-QO-KO90iQ&amp=)(from react-conf) where *Sophie Alpert* and *Dan Abramov* explained in details what hooks are and why they exist. However, I would try and explain a bit here.  
React State Hook is one of the many hooks that exist as feature proposal in React `v16.7.0-alpha`. Hooks are a new feature proposal that lets you use state and other React features without writing a class. With React State Hook(`useState`), you can make use of state in functional components(without writing a class).  
This is a link to the [documentation](https://reactjs.org/docs/hooks-overview.html) on Hooks.


## The "limitation" of not being able to merge state

The `useState` hook exposes APIs that you can easily use to read and update the state created. However, the API for updating the state is actually going to replace the previous state with the new state.  
Example:

```
const [userInfo, setUserInfo] = useState({ name: 'Dan', age: 26 });
// userInfo => { name: 'Dan', age: 26 }
setUserInfo({age: 27});
// userInfo => {age: 27}
```
The replacing behavior of `useState` is very well argued to be a befitting one on the [State Hook documentation](https://reactjs.org/docs/hooks-state.html), however, I strongly believe that there are a lot of valid scenarios where developers would want to merge stuff to the state(without going the reducer way) as opposed to replacing the state.  
If you are one of the folks that get limited with the replacing behavior of `useState`, then `useMergedState` is just for you.



## `useMergedState` is Here to Help :sparkles:
`useMergedState` makes it possible to merge states(when they are objects).  
If the previous state and the new state are both objects, `useMergedState` is going to merge the states(just like `this.setState`) but if they are not, it is simply going to replace the previous state with the new one(the default behavior of `useState`).  

## Installation
> - You need(at minimum) `react@16.7.0-alpha.0` to use this package.

```
npm i usemergedstate
```

## Code Example
Requiring the module:

```
const useMergedState = require('usemergedstate');
```

Merging State:
```
...
const [userInfo, setUserInfo] = useMergedState({ name: 'Dan', age: 26 });
// userInfo => { name: 'Dan', age: 26 }
setUserInfo({age: 27});
// userInfo => { name: 'Dan', age: 27 }
...
```

Roll back to default behavior: 
```
...
const [name, setName] = useMergedState('Dan');
// name => 'Dan'
setName('Abramov');
// name => 'Abramov'
...
```


