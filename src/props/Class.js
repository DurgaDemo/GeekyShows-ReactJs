import React, { Component } from 'react'

export class Class extends Component {
  render() {
    return (
      <div>
        <h2 className='text-primary'>Props using Class Component</h2>
        <h3 className='text-info'>My Name Is {this.props.name} And Emp No Is {this.props.Empno}</h3>
      </div>
    )
  }
}

export default Class