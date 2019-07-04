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
    this.setState({ count: this.state.count + 1 });
  };
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formaCount()}</span>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formaCount() {
    //candidate for destructuring, removed this.state.count
    //return this.state.count === 0 ? 'Zero' :  this.state.count;

    //destructing
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
