import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  states = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.states.counters];
    const index = this.states.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: (this.states.counters = counters) });
  };

  handleDelete = counterId => {
    const counters = this.states.counters.filter(c => c.id !== counterId);
    this.setState({ counters: (this.states.counters = counters) });
  };

  handleReset = () => {
    const counters = this.states.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: (this.states.counters = counters) });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.states.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
