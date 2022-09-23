import React from 'react'

function Function() {

  const arr=[10,20,30,40]
  const arr1=arr.map((value)=>{
    return <li>{value*2}</li>
  })

  return (
    <div>
  <ul>{arr1}</ul>

    </div>
  )
}

export default Function