import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './redux/slices/TodoSlice'
import './App.css'

function Todos() {
  const dispatch=useDispatch();
  const todos=useSelector(state=>state.todos)

return (
    <div>
        <h1 style={{textAlign: 'center', color: 'grey'}}>Todos</h1>
        <ul style={{display: "flex", flexDirection:"column"}}>
            {todos && todos.map((todo) => (
                <li key={todo.id} style={{marginBottom: '10px', display:"flex", justifyContent:"space-between" , gap:"20px", width:"50vw",backgroundColor: 'lightgray', padding: '5px'}}>

                    <div className='spcl-div'>
                     {todo.text} 
                     </div>
                    <button onClick={() => dispatch(removeTodo(todo.id))} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>Remove Item</button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Todos
