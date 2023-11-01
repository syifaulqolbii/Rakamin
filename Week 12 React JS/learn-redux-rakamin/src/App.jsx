import { useState } from 'react'
import './App.css'
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./store"
import {customIncrement, decrement, increment} from "./reduxToolkit.js";


function Example() {
    const count = useSelector((state) => state.counter.count)

    return (
        <h1>{count}</h1>
    )
}

function Counter() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <Display />
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(customIncrement(5))}>+ 5</button>
        </div>
    )
}

function Display() {
    const count = useSelector((state) => state.counter.count)
    return (
        <h1>{count}</h1>
    )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
            <Provider store={store}>
                <Example />
                <Counter />
            </Provider>
        </div>
    </>
  )
}

export default App
