// import React from 'react'

// function Function(props) {
//   return (
//     <div>
//            <h2 className='text-danger'>props using normal function</h2>
//         <h3 className='text-info'>My Name Is {props.name} And Emp No Is {props.Empno}</h3>
//     </div>
//   )
// }

// export default Function




import React from 'react'

const Function=(props)=> {
  return (
    <div>
        <h2 className='text-danger'>Props using arrow function</h2>
        <h3 className='text-info'>My Name Is {props.name} And Emp No Is {props.Empno}</h3>
    </div>
  )
}

export default Function