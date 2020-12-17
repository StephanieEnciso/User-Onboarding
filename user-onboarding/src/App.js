import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/Form';
import schema from './components/formSchema'
import * as yup from 'yup';

const initialUserFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
};

const initialErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
};

const initialUsers = [];
const isDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialUserFormValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabledButton, setDisabledButton] = useState(isDisabled);

  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((response) => {
        console.log(response);
        setUsers([response.data, ...users]);
        setFormValues(initialUserFormValues);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const submitUserForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    }
    postNewUser(newUser);
  };

  const change = (name, value) => {
    yup.reach(schema, name)
     .validate(value)
     .then(() => {
       setFormErrors({...formErrors, [name]: '',});
     })
     .catch((error) => {
       setFormErrors({...formErrors, [name]: error.errors[0],});
     });

     setFormValues({...formValues, [name]: value,});
  
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabledButton(!valid);
    });
  },[formValues])

  


  return (
    <div className="App">
      <UserForm values = {formValues}
      submit = {submitUserForm}
      change = {change}
      errors = {formErrors}
      disabled = {disabledButton}/>
    </div>
  );
};

export default App;
