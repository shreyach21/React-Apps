import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"My todo"}]
}

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        },
        //check the updateTodo if needed (not in tutorial)
        updateTodo:(state,action)=>{
            state.todos.map(todo=>(
                todo.id===action.payload ? todo.text=action.payload : todo
            ))
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = TodoSlice.actions
export const TodoReducer=TodoSlice.reducer