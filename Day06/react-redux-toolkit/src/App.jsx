

import './App.css'


//import { decrement,increment } from './Redux/Slices/CounterSlice'
import {increment, decrement} from './Redux/Slices/CounterSlice'
import { incrby5, decrby5 } from './Redux/Slices/AnotherSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  
const count=useSelector(state=>state.counter.value)

const dispatch=useDispatch();
const another=useSelector(state=>state.another.val)
// {count}



  return (
    <>
  
    {count}
     <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      {another}
      <button onClick={() => dispatch(incrby5(5))}>add 5</button>
      <button onClick={() => dispatch(decrby5(5))}>decr 5</button>
    </>
  )
}

export default App
