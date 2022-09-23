import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export class Entry extends Component {
  render() {
  const isRegistered=this.props.consumer
  if(isRegistered){
    return <User/>
  }
  else{
    return <Guest/>
  }
  }
}

export default Entry