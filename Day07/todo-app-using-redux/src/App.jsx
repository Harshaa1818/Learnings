
import React from 'react';
import Addtodo from './Addtodo.jsx';
import './App.css';
import Todo from './Todo.jsx';
import { Route, Routes } from 'react-router-dom';
import FetchApi from './FetchApi.jsx';


{/* <h1 style={{ textAlign: 'center', color: 'black' }}>Todo App using Redux Toolkit</h1>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Addtodo />
  <Todo />
</div> */}


function App() {
  return (
    <>
     <FetchApi/>
    </>
  );
}

export default App;

