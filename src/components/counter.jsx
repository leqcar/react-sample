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
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    const { onIncrement, onDelete, counter } = this.props;
    console.log("*** Counter Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formaCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formaCount() {
    //candidate for destructuring, removed this.state.count
    //return this.state.count === 0 ? 'Zero' :  this.state.count;

    //destructing
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
