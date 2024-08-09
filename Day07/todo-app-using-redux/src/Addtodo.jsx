import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/slices/TodoSlice'

function Addtodo() {
  const [input,setInput]=useState("")
  const dispatch=useDispatch()

  const addHandler=(e)=>{

    e.preventDefault();
    
    dispatch(addTodo(input));

    setInput("")
    

  }

  return (
    <form onSubmit={addHandler} style={{ display: 'flex', marginBottom: '1rem' }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: '0.5rem',
          marginRight: '0.5rem',
          border: 'none',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <button
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          background: '#4caf50',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Add todo
      </button>
    </form>
  );
}

export default Addtodo

