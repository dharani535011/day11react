import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setdelete, setedit, setitems } from '../Slice/Bookslice'



const validate=values=>{
    const errors={}
    if(!values.title){
      errors.title="required..."
    }
    if(!values.author){
      errors.author="required..."
    }
    if(!values.isbn){
    errors.isbn="required..."
    }
    if(!values.date){
      errors.date="required..."
      }
    return errors
  }


const Booklist = () => {
   const users= useSelector((state)=>state.bookinfo.users)
   const dispatch=useDispatch()
    const [add,setadd]=useState(false)
    const [okk,setokk]=useState(false)
    const [ids,setids]=useState("")
   
    const formik=  useFormik({
        initialValues:{
          title:"",
          author:"",
        isbn:"",
        date:""
        
        },
        validate,
        onSubmit:(values)=>{
           if(okk){
            const value=values?{...values,id:ids}:{...values,id:1}
            dispatch(setedit(value))
            
            
          }else{
            const value=values?{...values,id:users.length+1}:{...values,id:1}
        
            dispatch(setitems(value))
            
          }
          setadd(false)
         setokk(false)
         resetForm()

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

           dispatch(setdelete(ids))
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
        const book = users.find(user => user.id === id);
        if (book) {
            formik.setValues(book);
        }

      }
    return (
        <>
        <div className='total'>
        
        
        <div className='bookadd'>
        <h1 className='h1'>Books List</h1>
        <div className='po' style={{display:add?"block":"none"}}></div>
        <div>
        <table class="table">
     <thead><td>Title</td><td>Author</td><td>ISBN No.</td><td>Publication Date</td><td>edit</td><td>Delete</td></thead>
     <tbody>{
        users.map((val)=>(
            <tr>
        <td>{val.title}</td><td>{val.author}</td><td>{val.isbn}</td><td>{val.date}</td><td><button className='edit' onClick={()=>handleedit(val.id)}>edit</button></td><td><button className='delete' onClick={()=>handledelete(val.id)}>delete</button></td>
        </tr>
        ))
        }</tbody>
</table>
            </div>   
            {users.length?null:(<h1 className='h1'>Book list empty click to publish your new books</h1>)} 
           {add?(   
      <div className='book' >
        <form onSubmit={formik.handleSubmit}>
           <div>
            <input type="text" 
            className='inp'
            name='title'
            id='title'
            placeholder='Title..'
            value={formik.values.title}
            onChange={formik.handleChange}
            />
           </div>
           <p style={style}>{formik.errors.title}</p>
           <div>
            <input type="text" 
            className='inp'
            name='author'
            id='author'
            placeholder='Author Name..'
            value={formik.values.author}
            onChange={formik.handleChange}
            />
           </div>
           <p style={style}>{formik.errors.author}</p>
           <div>
            <input type="number" 
            className='inp'
            name='isbn'
            id='isbn'
            placeholder='ISBN Number..'
            value={formik.values.isbn}
            onChange={formik.handleChange}
            />
           </div>
           <p style={style}>{formik.errors.isbn}</p>
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
           {okk?(<button className="ad" type='submit'>okk</button>):(<button className="ad" type='submit'>Add</button>)}
           <input className='cancel' value="cancel" type='button' onClick={handlecancel}/>
        </form></div>):null}<button className='addd' onClick={()=>handleadd()}>+</button></div>
        
        </div> 
        </>
      )
    }

export default Booklist