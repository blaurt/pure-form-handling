import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import FormWrapper from '../containers/FormWrapper';

class Form extends Component {
  render() {
    const {
      data: { username, email, phone },
      errors,
      handleInput,
      handleSubmit
    } = this.props;
    return (
      <div className="openBill">
        <form className="openBillForm" onSubmit={handleSubmit}>
          <Input
            key="username"
            value={username}
            name="username"
            onChange={handleInput}
            placeholder="Login"
            error={errors.username}
            required
          />
          <Input
            key="phone"
            value={phone}
            name="phone"
            onChange={handleInput}
            placeholder="phone"
            error={errors.phone}
            required
          />
          <Input
            key="email"
            value={email}
            type="email"
            name="email"
            onChange={handleInput}
            placeholder="email"
            error={errors.email}
            required
          />
          <button type="submit" className="submitBtn">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const initialState = {
  username: '',
  phone: '',
  email: ''
};

export default FormWrapper(initialState, initialState)(Form);
