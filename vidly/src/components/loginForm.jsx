import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    console.log(result);
    if (!result.error) return null;

    const errors = {};

    const validationArray = result.error.details;
    validationArray.forEach(element => {
      //errors.username
      errors[element.path[0]] = element.message;
    });
    return errors;
  };

  validateProperty = input => {
    let format = /[ !#$%^&*()_+\-=[\]{};':"\\|,<>/?]/;
    let message = null;
    if (input.value.trim() === '' || format.test(input.value)) {
      message = 'empty or contains special characters';
    }
    return message;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    // call the server, save changes, redirect
    console.log('submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    //ex. errors.username
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            error={errors.username}
            onChange={this.handleChange}
            name='username'
            label='Username'
          />
          <Input
            value={account.password}
            error={errors.password}
            onChange={this.handleChange}
            name='password'
            label='Password'
          />
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
