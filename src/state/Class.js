import React, { Component } from "react";

class Class extends Component {
  state = {
    name: "Durga",
    rollno: 1033453,
  };

  changeEvent = () => {
    this.setState({
      name: "Satya Narayan",
      rollno: 448,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-warning">State in Class Component</h1>
        <h3 className="text-success">
          My Name Is {this.state.name} roll no {this.state.rollno}
        </h3>
        <br></br>
        <button className="btn btn-success" onClick={this.changeEvent}>
          Click
        </button>
      </div>
    );
  }
}

export default Class;
