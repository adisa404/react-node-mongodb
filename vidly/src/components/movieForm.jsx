import React, { Component } from 'react';

class MovieForm extends Component {
  state = {};
  handleSave = () => {
    this.props.history.push('/movies');
  };
  render() {
    return (
      <React.Fragment>
        <h1>MovieForm {this.props.match.params.id}</h1>
        <button className='btn btn-primary' onClick={this.handleSave}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MovieForm;
