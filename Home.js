import axios from 'axios'


import React, { useEffect, useState } from 'react'

const Home = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
axios.get("http://localhost:5000/data").then((res)=>{
    setUsers(res.data)
})
    },[])
  return (
    <table>
        <tr><th>Name</th><th>Place</th><th>Gender</th><th>E-mail</th><th>Phno</th><th>DOB</th></tr>
        {
            users.map((obj)=>{
                return <tr>
                    <td>{obj.name}</td>
                    <td>{obj.place}</td>
                    <td>{obj.gender}</td>
                    <td>{obj._id}</td>
                    <td>{obj.phno}</td>
                    <td>{new Date(obj.dob).toLocaleDateString()}</td>
                </tr>
            })
        }
    </table>
  )
}

export default Home