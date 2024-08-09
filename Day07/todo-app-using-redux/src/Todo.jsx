import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './redux/slices/TodoSlice'

function Todos() {
  const dispatch=useDispatch();
  const todos=useSelector(state=>state.todos)

return (
    <div>
        <h1 style={{textAlign: 'center', color: 'blue'}}>Todos</h1>
        <ul style={{listStyleType: 'none', padding: 0}}>
            {todos && todos.map((todo) => (
                <li key={todo.id} style={{marginBottom: '10px', backgroundColor: 'lightgray', padding: '5px'}}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>Remove Item</button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Todos
