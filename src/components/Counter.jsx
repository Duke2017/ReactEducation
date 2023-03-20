import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((state) => ({ value: state.value + 1 }));
  }

  handleDecrement() {
    this.setState((state) => ({ value: state.value - 1 }));
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("p", null, `Value: ${this.state.value}`),
      React.createElement("button", { onClick: this.handleIncrement }, "+"),
      React.createElement("button", { onClick: this.handleDecrement }, "-")
    );
  }
}

export default Counter;
