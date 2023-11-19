

import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details() {
    let [user,setUser]=useState({});
    const {id} =useParams('id');

    const getUser= async() =>{

      const {data}=  await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
      
      setUser(data.user);
    
    }
 useEffect(()=>{
  getUser();
},[]
)
  return (
    <div className="container-fluid ">
    <div className="row flex-nowrap">
      <Sidebar />
  
      <div className="col py-3">
   <Container>


<h2 className='text-secondary p-4'>Details For {user.name}</h2>
<hr />
<ul >
    <li className='p-2'> User Name : {user.name}</li>
    <li className='p-2'> User Email : {user.email}</li>
    <li className='p-2 '> User Password : {user.password}</li>
</ul>

   </Container>



      </div>
    </div>
  </div>  )
}

export default Details
