import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
  let [data,setData]=useState({"name":"","phno":"","place":"","_id":"","gender":"","dob":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/add",data).then((res)=>{
setMsg(res.data)
if(res.data=="data added")
{
  setData({"name":"","phno":"","place":"","_id":"","gender":"","dob":""})
}
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='Enter name' name="name" onChange={fun} value={data.name}/>
        <input type='text' placeholder='Enter place' name="place" onChange={fun} value={data.place}/>
        <input type='text' placeholder='Enter email' name="_id" onChange={fun} value={data._id}/>
        <input type='text' placeholder='Enter phno' name="phno" onChange={fun} value={data.phno}/>
        <input type='date' name="dob" onChange={fun} value={data.dob}/>
        <div>
          Gender:<input type='radio' value="male" onChange={fun} name="gender" checked={data.gender=="male"}/>Male
          <input type='radio' value="female" onChange={fun} name="gender" checked={data.gender=="female"}/>Female
        </div>
<button onClick={add}>Add</button>
      </div>

    </div>
  )
}

export default Add