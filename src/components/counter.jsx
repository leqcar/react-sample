import React, { Component } from "react";

class Counter extends Component {
  /*   constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked!", this);
  } */

  //Note, arrow function is experimental and may break in future, else do above approach.
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formaCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formaCount() {
    //candidate for destructuring, removed this.state.count
    //return this.state.count === 0 ? 'Zero' :  this.state.count;

    //destructing
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
