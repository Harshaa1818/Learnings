

import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment } from './Redux/Slices/CounterSlice'

function App() {
  
const count=useSelector(state=>state.counter.value)
const dispatch=useDispatch()

  return (
    <>
 {count}
 <button onClick={()=>dispatch(decrement())}>-</button>
 <button onClick={()=>dispatch(increment())}>+</button>
      
    </>
  )
}

export default App
