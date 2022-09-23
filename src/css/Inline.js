import React from 'react'

function Inline() {
 
  const btnStyle={
     color:'blue',
     backgroundColor:'orange'
  }

  const txt1={
      color:'blue'
  }
  const txt2={
    fontSize:"70px"
  }
  return (
    <div>
  <button style={btnStyle}>Button</button>
  <h1 style={{...txt1,...txt2}}>Hello App</h1>

    </div>
  )
}

export default Inline