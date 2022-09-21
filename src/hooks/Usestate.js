import React, { useState } from 'react'

function Usestate() {

const [name,setName]=useState("Durga")
const [rollno,setRoll]=useState(1033453)

   const Event=()=>{
      setName("Satya")
      setRoll(1044543)
   }
  return (
    <div>
        <h1 className='text-primary'>UseState in Function Component</h1>
        <h3 className='text-warning'>Hello,{name} Your Roll no is {rollno}</h3>
        <button className='btn btn-success' onClick={Event}>Click</button>
    </div>
  )
} 

export default Usestate