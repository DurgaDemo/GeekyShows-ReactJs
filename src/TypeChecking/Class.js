import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Pt from 'prop-types'
export class Class extends Component {
  render() {
    return (
      <div>
        <h2 className='text-primary '>TypeChecking In Class Component</h2>
        <h3>Hi {this.props.name}</h3>
      </div>
    )
  }
}

// Class.propTypes={
//     name:PropTypes.string,
//     rollno:PropTypes.number
// }


// Class.propTypes={
//     name:Pt.string,
//     // rollno:Pt.number
// }


// Class.propTypes={
//     name:Pt.string,
//     rollno:Pt.number.isRequired
// }


Class.defaultProps={
    name:"Durga Mohapatra"   // Assigning default value
    
}

export default Class