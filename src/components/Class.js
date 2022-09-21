// import React ,{Component} from "react";


// class Class extends Component{
//     render(){
//         return(
//             <div>
//                 <h1 className='text-danger'>This is Class Component</h1>
//             </div>
//         )
//     }
// }

// export default Class



import React,{Component} from 'react'

class Class extends Component{

    render(){
        return(
            <div>
                 <h1 className='text-danger'>This is Class Component Using Props</h1>
                 <h2 className='text-info'>Hi My Name Is {this.props.name} My Age Is {this.props.age}</h2>
            </div>
        )
    }
}

export default Class