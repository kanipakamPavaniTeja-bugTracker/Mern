
import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {
  const [email, setEmail] = useState('');
  const [Data, setData] = useState(""); 
  const [msg, setMsg] = useState(''); 

  const fun = (e) => {
    setEmail(e.target.value);
  };

  const search = () => {
    axios.get(`http://localhost:5000/search/${email}`) 
      .then((res) => {
        if (res.data) {
          setData(res.data)
          setMsg("")
        } else {
          setMsg('Check the email.');
          setData("")
        }
      })
     
  }

  return (
    <div className="container">
      <div className="form">
        <input type="email" placeholder="Enter email" value={email} onChange={fun}/>
        <button onClick={search}>Search</button>
        
        <div className="msg">{msg}</div>

        {Data!="" && (
          <table border="1" className="person-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Place</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Data.name}</td>
                <td>{Data.phno}</td>
                <td>{Data.place}</td>
                <td>{Data._id}</td>
                <td>{Data.gender}</td>
                <td>{Data.dob}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Search;
/*

import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  let [data,setData]=useState("")
  let [msg,setMsg]=useState("")
  let [user,setUser]=useState("")
  let fun=(e)=>setData(e.target.value)
  let search=()=>{
    axios.get(`http://localhost:5000/search/${data}`).then((res)=>{
      if(res.data)
      {
        setUser(res.data)
        setMsg("")

      }
      else{
        setUser("")
        setMsg("check email")

      }
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='Enter Email' onChange={fun} value={data}/>
        <button onClick={search}>Search</button>
       {user!="" && <table>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Phno</th>
            <td>{user.phno}</td>
          </tr>
          <tr>
            <th>Place</th>
            <td>{user.place}</td>
          </tr>
        </table>}

      </div>

      
    </div>
  )
}

export default Search*/
