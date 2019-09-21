import { Component } from 'react';
import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    // we use this to uniquely identify each counter component
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);

    console.log('App.js constructor', this.props);

    //this.state = this.props.something;
  }

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
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        ></NavBar>
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
