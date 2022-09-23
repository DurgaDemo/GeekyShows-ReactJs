import React from 'react'

function Props(props) {
    const num=props.numbers
  return (
    <div>

    {
        num.map((valus)=>{
            return <li>{valus*10}</li>
        })
    }

    </div>
  )
}

export default Props