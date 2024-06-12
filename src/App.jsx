import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Booklist from './pages/Booklist'
import Home from './pages/Home'
import Authorlist from './pages/Authorlist'
 
const router=createBrowserRouter([
{
  path:"/",
  element:<Home/>,
  children:[
    {
      path:"/",
      element:<Booklist/>,
    },{
      path:"/author",
      element:<Authorlist/>,
    }
  ]
}
])

function App() {


  return (
    <>
<RouterProvider router={router} />
    </>
   
  )
}

export default App
