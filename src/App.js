import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  states = {
    counters: [
      { id: 1, value: 0 },
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
      <React.Fragment>
        <NavBar
          totalNoCounter={this.states.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.states.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
