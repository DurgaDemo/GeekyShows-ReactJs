import React, { useEffect, useState } from 'react'

function Useeffect() {

const [count,setCount]=useState(0)
const [count1,setCount1]=useState(0)

  useEffect(()=>{
    console.log("use effect called")
  },[count])

  const Increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    setCount1(count1-1)
  }
  return (
    <div>
    <h1 className='text-primary'>UseEffect in Function Component</h1>
     <h3>{count} {count1}</h3>
     <button className='btn btn-warning mx-2' onClick={Increment}>Increment</button>
     <button className='btn btn-warning' onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Useeffect


/*
by default ,it runs both after the first render and after every update.
it will do the same componentDidMount and componentDidUpdate will do. 
*/