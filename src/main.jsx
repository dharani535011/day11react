import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from "./Store/store.jsx"
import  AuthorContext  from './context/AuthorContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthorContext>
  <Provider store={Store}>
    
    <App /></Provider></AuthorContext>
   </>,
  
)
