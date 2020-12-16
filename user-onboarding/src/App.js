import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
import UserForm from './components/Form';

const initialUserFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
};

const initialUsers = [];

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialUserFormValues);


  const submitUserForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    }
  };


  return (
    <div className="App">
      <UserForm values = {formValues}
      submit = {submitUserForm}/>
    </div>
  );
};

export default App;
