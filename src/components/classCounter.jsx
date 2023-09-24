import { Button, InputNumber } from "antd";
import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }
  handleChange(e) {
    this.setState({ count: Number(e) });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <InputNumber size="large" type="number" onChange={this.handleChange} />

        <Button onClick={this.handleIncrement}>+</Button>
        <Button onClick={this.handleDecrement}>-</Button>
      </div>
    );
  }
}

export default ClassCounter;
