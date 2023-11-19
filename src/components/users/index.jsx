import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Loader from '../../shared/Loader';

function index() {
  const [users, setUsers] = useState([]);
  let [loader, setLoader] = useState(false);

  const deleteUser = async (id) => {
    setLoader(true)
    const { data } = await axios.delete(`https://crud-users-gold.vercel.app/users/${id}`)
    if (data.message == 'success') {
      toast.success("The User Deleted Successfully!")
      setLoader(false)
      getUsers();
    }
  }

  const getUsers = async () => {
    const response = await axios.get("https://crud-users-gold.vercel.app/users")
    setUsers(response.data.users);
    setLoader(false)
  }
  useEffect(() => {
    setLoader(true)
    getUsers();
  }, []
  )
  if (loader) {
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
          <h2 className='text-secondary p-4'>All Users</h2>
<hr />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? users.map((user, index) => {
                  return (
                    <React.Fragment key={user._id}>
                      <tr>
                        <td>{index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td > <button onClick={() => deleteUser(user._id)} type="button" class="btn btn-outline-danger mx-1">Delete</button>
                          <Link to={`/user/${user._id}`}><button type="button" class="btn btn-outline-info mx-1">Details</button></Link>
                             <Link to={`/user/edit/${user._id}`}><button type="button" class="btn btn-outline-warning mx-1">Edit</button></Link>
                        </td>
                      </tr>
                    </React.Fragment>
                  )
                }) : <Loader />
                }
              </tbody>
            </table>
          </Container>
        </div>
      </div>
    </div>


  )
}

export default index