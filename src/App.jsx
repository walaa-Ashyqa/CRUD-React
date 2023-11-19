import { useState } from 'react'

import {

  Route,
  Routes,
} from "react-router-dom";

import Index from './components/users/index';
import Create from './components/users/create';
import Details from './components/users/Details';
import Edit from './components/users/Edit';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Routes>
      <Route path='/' element ={<Index/>}></Route>
      <Route path='/user/index' element ={<Index/>}> </Route>
      <Route path='/user/create' element ={<Create/>}></Route>
      <Route path='/user/:id' element ={<Details/>}></Route>
      <Route path='/user/edit/:id' element ={<Edit/>}></Route>
      <Route path='*' element ={ <h2>This Page Not Found!!</h2>}></Route>
     </Routes>
  
    </>
  )
}

export default App
