
import React from 'react';
import Addtodo from './Addtodo.jsx';
import './App.css';
import Todo from './Todo.jsx';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Todo App using Redux Toolkit</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Addtodo />
        <Todo />
      </div>
    </>
  );
}

export default App;

