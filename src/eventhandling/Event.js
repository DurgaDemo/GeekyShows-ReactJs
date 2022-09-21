import React, { Component } from 'react'

export class Event extends Component {

  state={
    id:101,
    name:"Rahul"
  }
   
  handleClick=(id,j,e)=>{
    console.log("Button Clicked")
    console.log(id)
    console.log(j)
    console.log(e)
  }

  handlrClickArg=(e)=>{
    this.handleClick(this.state.id,"314",e)
  }

  render() {
    return (
      <div>
        <h2 className='text-warning'>Passing Argument To Event Handler</h2>
        <br></br>
        <h2>Hello,{this.state.name}</h2>
        <button className='btn btn-primary' onClick={this.handlrClickArg}>Click</button>
      </div>
    )
  }
}

export default Event