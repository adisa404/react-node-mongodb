import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    // we use this to uniquely identify each counter component
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    var finalCouners = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: finalCouners });
  };

  handleDelete = id => {
    var finalCouners = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: finalCouners });
  };

  handleIncrement = counter => {
    // clone the object taht si in the state
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
