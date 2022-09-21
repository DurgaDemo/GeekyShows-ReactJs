import React,{Component} from "react";

class Class extends Component{
   constructor(props){
    super(props)
   this.state={
        name:"Durga",
        roll:this.props.roll
    }
   }
  

handleClick=()=>{
    this.setState({
        name:"Satya",
        roll:1033465
    })
}

    render(){
        return(
            <div>
                <h1 className="text-primary">Hello Event</h1>
                <h3 className="text-warning">{this.state.name} {this.state.roll}</h3>
                <button className="btn btn-success" onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default Class