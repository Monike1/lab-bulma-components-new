import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = (props) => {
  return (
    <div className="columns is-centered">
      <div className="signup-form column is-half">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Name" type="password"/>
        <CoolButton className="button is-success">Signup</CoolButton>
      </div>
    </div>
  )
}

export default Signup;