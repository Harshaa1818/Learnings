import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{ id: 1, text: "play football" }]
}

export const TodoSlice=createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : ( state ,action ) => {
            const todonew=
            {
                id : nanoid(), 
                text : action.payload
            }

            state.todos.push(todonew)


        },
        removeTodo:(state,action)=>{

            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

        }
    }
})

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;