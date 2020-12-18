import React from 'react';

function UserForm (props) {

    const {values, submit, change, errors, disabled} = props

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const {name, value, checked, type} = event.target;
        const valueNeeded = type === 'checkbox' ? checked : value;
        change(name, valueNeeded);
    };

    return (
        <form onSubmit = {onSubmit}>
            <label> Name 
                <input value = {values.name}
                name = 'name'
                type = 'text'
                onChange = {onChange} />
            </label>

            <label> Email 
                <input name = 'email'
                type = 'text'
                value = {values.email}
                onChange = {onChange} />
            </label>

            <label> Password 
                <input name = 'password'
                type = 'text'
                value = {values.password}
                onChange = {onChange} />
            </label>

            <label> Terms of Service 
                <input name = 'terms'
                type = 'checkbox'
                checked = {values.terms}
                onChange = {onChange} />
            </label>

            <div>
                <button disabled = {disabled}>Submit</button>
            </div>
            <div className = 'errors-container'>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.terms}</p>
            </div>
        </form>
    );
}

export default UserForm;