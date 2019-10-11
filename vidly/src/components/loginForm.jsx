import React from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = () => {
    // call the server, save changes, redirect
    console.log('submitted');
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            error={errors.username}
            onChange={this.handleChange}
            name='username'
            label='Username'
          />
          <Input
            value={data.password}
            error={errors.password}
            onChange={this.handleChange}
            name='password'
            label='Password'
          />
          <button disabled={this.validate()} className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
