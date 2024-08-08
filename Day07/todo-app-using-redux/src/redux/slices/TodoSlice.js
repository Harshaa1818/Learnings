import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:nanoid, name:"play football"}]
}

export const TodoSlice=createSlice({
    name:'todo',
    initialState,
    reducer:{
        addTodo:(state,action)=>{
            const todonew=
            {
                id:nanoid(), 
                name:action.payload
            }

            state.todos.push(todonew)


        },
        removeTodo:(state,action)=>{

            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)

        }
    }
})

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;