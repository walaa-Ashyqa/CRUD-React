import React, { useState } from 'react'
import Sidebar from './sidebar'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/input';
import uservalidation from '../../validation/uservalidation';
import Loader from '../../shared/Loader';
function create() {
    const navigate =useNavigate();
    let [errors,setErrors]=useState({
        name:'',
        email:'',
        password:'',
    });
    let [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
    });
    let [errorBack,setErrorBack]=useState('');
    let [loader,setLoader]=useState(false);
    const handelData=(e) =>{
        const {name,value} =e.target;
       setUser({...user,[name]:value});
        console.log(user);
    }
    const sendData= async(e) =>{
      e.preventDefault();
      setLoader(true);
if(Object.keys(uservalidation(user)).length>0){
    setErrors(uservalidation(user));
    console.log(uservalidation(user));
}else{
  try{   const {data}=  await axios.post("https://crud-users-gold.vercel.app/users/",user)
  console.log(data);
  if(data.message=='success'){
      toast.success("The User Added Successfully!")
      navigate('/user/index');
      setLoader(false);
  }
}catch(error){
setErrorBack(error.response.data.message);
setErrors([]);
setLoader(false);

}
   
    }
    }

    if(loader){
   return (
  <div className="container-fluid ">
    <div className="row flex-nowrap">
      <Sidebar />
      <div className="col py-3">
        <Loader />
      </div>
    </div>
  </div>)
    }
  return (
    <div className="container-fluid ">
    <div className="row flex-nowrap">
      <Sidebar />
  
      <div className="col py-3">
   <Container>
   <h2 className='text-secondary p-4'>Create New User</h2>
<hr />
    {errorBack && <p className='text text-danger p-4'>{errorBack}</p>}
  <form  className="row g-3 justify-content-center m-3" onSubmit={sendData}>
<Input errors={errors} id={'inputName'} name={'name'} title={'Your Name'}  type={'text'} handelData={handelData}/>
<Input errors={errors} id={'inputEmail'} name={'email'} title={'Your Email'}  type={'email'} handelData={handelData}/>
<Input errors={errors} id={'inputPassword'} name={'password'}title={'Your Password'}  type={'password'} handelData={handelData}/>
  <div className="col-12">
    <button type="submit" className="btn btn-dark px-5 mt-2 rounded-pill ">Add User</button>
  </div>
</form>

   </Container>



      </div>
    </div>
  </div>  )
}

export default create