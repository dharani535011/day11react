import { createContext, useState } from "react";
import React from 'react'





export const Authorcontext=createContext()


const AuthorContext = ({children}) => {
     const [author,setauthor]=useState([{
        id:1,
        name:"nova",
        date:"14-10-1981",
        biography:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, dicta!"
     },
     {
        id:2,
        name:"victor",
        date:"10-10-1978",
        biography:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, dicta!"
     }])
  return (
    <Authorcontext.Provider value={{value:[author,setauthor]}}>
        {children}
        
    </Authorcontext.Provider>
  )
}

export default AuthorContext