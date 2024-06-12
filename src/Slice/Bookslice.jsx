import { createSlice } from "@reduxjs/toolkit";


const initialState={
    users:[{
        id:1,
        title:"science",
        author:"nova",
        isbn:"676848",
        date:"2003-04-03"
    },
    {
        id:2,
        title:"maths",
        author:"victor",
        isbn:"676878",
        date:"2009-10-10"
    }]
}

export const bookslice=createSlice({
    name:"books",
    initialState,
    reducers:{
        setitems:(state,action)=>{
             state.users=[...state.users,action.payload]
        },
        setdelete:(state,action)=>{
            state.users=state.users.filter((val)=>val.id!==action.payload)
        },
        setedit:(state,action)=>{
            state.users=state.users.map((val)=>val.id===action.payload.id?{...val,title:action.payload.title,author:action.payload.author,isbn:action.payload.isbn,date:action.payload.date}:val)
        }
    }
})
export const {setdelete ,setitems,setedit}=bookslice.actions
export default bookslice.reducer