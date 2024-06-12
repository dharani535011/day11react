import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Authorcontext } from '../context/AuthorContext'




const validate=values=>{
    const errors={}
    if(!values.name){
      errors.name="required..."
    }
    if(!values.date){
      errors.date="required..."
      }
    if(!values.biography){
    errors.biography="required..."
    }
   
    return errors
  }

const Authorlist = () => {
  const {value}=useContext(Authorcontext)
  const [author,setauthor]=value
   const [add,setadd]=useState(false)
   const [okk,setokk]=useState(false)
   const [ids,setids]=useState("")
  
   const formik=  useFormik({
       initialValues:{
         name:"",
         date:"",
       biography:"",
      
       
       },
       validate,
       onSubmit:(values)=>{
          if(okk){
           const value=author.map((val)=>val.id===ids?{...val,name:values.name,date:values.date,biography:values.biography}:val)
           setauthor(value)
           
           
         }else{
           const value=values?[...author,{...values,id:author.length+1}]:[...author,{...values,id:1}]
           setauthor(value)
           
           
         }
         setadd(false)
        setokk(false)
        

          } 
     
     })
     const style={
       color:"red"
     }
     const handleadd=()=>{
         setadd(true)
         formik.resetForm()
        
     }
     const handledelete=(id)=>{
const ids=Number(id)
        const value=author.filter((val)=>val.id!==ids)
          setauthor(value)
     }
     const handlecancel=()=>{
       setadd(false)
       formik.resetForm()
       setokk(false)
     }
     const handleedit=(id)=>{
       setadd(true)
       setokk(true)
       setids(id)
       const book = author.find(user => user.id === id);
       if (book) {
           formik.setValues(book);
       }

     }
   return (
       <>
       <div className='total'>
       
       
       <div className='bookadd'>
       <h1 className='h1'>Authors List</h1>
       <div className='po' style={{display:add?"block":"none"}}></div>
       <div>
       <table class="table">
    <thead><td>Name</td><td>Birth Date</td><td>Biography</td><td>edit</td><td>Delete</td></thead>
    <tbody>{
       author.map((val)=>(
           <tr>
       <td>{val.name}</td><td>{val.date}</td><td>{val.biography}</td><td><button className='edit' onClick={()=>handleedit(val.id)}>edit</button></td><td><button className='delete' onClick={()=>handledelete(val.id)}>delete</button></td>
       </tr>
       ))
       }</tbody>
</table>
           </div>  
           {author.length?null:(<h1 className='h1'>Author list is empty click to add new author</h1>)}  
          {add?(   
     <div className='book' >
       <form onSubmit={formik.handleSubmit}>
          <div>
           <input type="text" 
           className='inp'
           name='name'
           id='name'
           placeholder='name..'
           value={formik.values.name}
           onChange={formik.handleChange}
           />
          </div>
          <p style={style}>{formik.errors.name}</p>
          <div>
           <input type="date" 
           className='inp'
           name='date'
           id='date'
           placeholder='publication date..'
           value={formik.values.date}
           onChange={formik.handleChange}
           />
          </div>
          <p style={style}>{formik.errors.date}</p>
          <div>
           <textarea type="text" 
           className='inp'
           name='biography'
           id='biography'
           placeholder='Biography..'
           value={formik.values.biography}
           onChange={formik.handleChange}
           />
          </div>
          <p style={style}>{formik.errors.biography}</p>
         
          {okk?(<button className="ad" type='submit'>okk</button>):(<button className="ad" type='submit'>Add</button>)}
          <input className='cancel' value="cancel" type='button' onClick={handlecancel}/>
       </form></div>):null}<button className='addd' onClick={()=>handleadd()}>+</button></div>
       
       </div> 
       </>
     )
   }

export default Authorlist