import React, { useState } from 'react'

function Inline1() {

const [change,setChange]=useState(false)

const clickHandle=()=>{

    setChange({
        change:true
    })
}

const btnStyle={
    color:'blue',
    backgroundColor:'orange'
 }

if(change){
    btnStyle.backgroundColor="white"
}

  return (
    <div>
        {/* {change} */}
        <button onClick={clickHandle} style={btnStyle}>Button</button>
    </div>
  )
}

export default Inline1