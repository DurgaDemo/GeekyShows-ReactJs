import React, { Component } from 'react'

export class State extends Component {

state={
    users:[
        {id:101,name:"Rahul",phone:9090},
        {id:102,name:"Bikram",phone:8091},
        {id:103,name:"Swsti",phone:8397},
    ],
    isLogedin:false
}
  render() {
//     const newUsers=this.state.users.map((value)=>{
//         return <h1>{value.name}</h1>
//    })
    return (
      <div>
      {/* <h1>{this.state.users[1].name}</h1> */}

     {/* <h1>{newUsers}</h1> */}

<table className='table'>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Phone</th>
  </tr>
  {
 this.state.users.map((values)=>{
    return(
        <tr>
        <td>{values.id}</td>
        <td>{values.name}</td>
        <td>{values.phone}</td>
      </tr>
    )
 })
  }
</table>
</div>
 )
}
}

export default State