// import React from 'react'

// function Functional(){
//     return(
//         <div>
//             <h1 className='text-info'>This Is Functional Component</h1>
//         </div>
//     )
// }

// export default Functional



/*
Creating Functional Component Using Arrow Function

*/


// import React from 'react'

// const Functional=()=> {
//   return (
//     <div>
//      <h1 className='text-info'>This Is Functional Component Using Arrow Function</h1>
//     </div>
//   )
// }
// export default Functional




import React from 'react'

const Functional=(props)=> {
  return (
    <div>
     <h1 className='text-info'>My Name Is {props.name} And Age Is {props.age}</h1>
    </div>
  )
}

export default Functional