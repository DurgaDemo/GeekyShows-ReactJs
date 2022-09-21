import React, { Component } from "react";

export class Setstate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Durga Mohapatra",
      roll: this.props.roll,
    };
  }

  eventHandler = () => {
    this.setState({
      name: "Titu Mohapatra",
      roll: 1044566,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-warning">
          My Name Is {this.state.name} roll No {this.state.roll}
        </h1>
        <br></br>
        <button onClick={this.eventHandler} className="btn btn-danger">
          Click Here
        </button>
      </div>
    );
  }
}

export default Setstate;
