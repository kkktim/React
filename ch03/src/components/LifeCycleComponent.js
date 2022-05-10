import React, { Component } from "react";

class LifeCycleComponent extends Component {
  state = { num: 0 };

  constructor() {
    super();
    console.log("constructor...");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps...");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate...");
    return true;
  }
  render() {
    console.log("render...");
    let stateNum = this.state.num;
    return (
      <div className="LifeCycleComponent">
        <h4>LifeCycleComponent</h4>
        <p>
          num : {this.state.num}
          <button
            onClick={() => {
              this.setState({ num: stateNum + 1 });
            }}
          >
            증가
          </button>
        </p>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount...");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }
}

export default LifeCycleComponent;
