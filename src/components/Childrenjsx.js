// using functional component

// import React from 'react'

// function Childrenjsx(props) {
//   return (
//     <div>
//    <h2>Hi {props.children}</h2>   

//     </div>
//   )
// }

// export default Childrenjsx


// using class component


import React, { Component } from 'react'

export class Childrenjsx extends Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.children}</h1>
      </div>
    )
  }
}

export default Childrenjsx