import React, { Component } from 'react'

export class List1 extends Component {
  render() {

 const arr=[10,20,30,40]

    return (
      <div>
        
          {
            arr.map((value)=>{
                return <li>{value*2}</li>
            })
          }    
        
   
      </div>
    )
  }
}

export default List1