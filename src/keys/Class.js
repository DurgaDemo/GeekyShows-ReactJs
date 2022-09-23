import React, { Component } from 'react'

export class Class extends Component {

  state={
    users:[
        {id:101,name:"Rahul",phone:9090},
        {id:102,name:"Bikram",phone:8091},
        {id:103,name:"Swsti",phone:8397},
    ]
  }

  render() {
    return (
      <div>
<table className='table'>
 <thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Phone</th>
  </tr>
  </thead>
  {
 this.state.users.map((values)=>{
    return(
        <tbody key={values.id}>
        <tr>
        <td>{values.id}</td>
        <td>{values.name}</td>
        <td>{values.phone}</td>
      </tr>
      </tbody>
    )
 })
  }
</table>
      </div>
    )
  }
}

export default Class