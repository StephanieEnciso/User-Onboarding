import React from 'react';

function UserForm (props) {

    const {values, submit} = props

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const {name, value} = event.target;
    }

    return (
        <form onSubmit = {onSubmit}>
            <label> Name 
                <input value = {values.name}
                name = 'Name'
                type = 'text'
                onChange = {onChange} />
            </label>

            <label> Email 
                <input name = 'Email'
                type = 'text'
                value = {values.email}
                onChange = {onChange} />
            </label>

            <label> Password 
                <input name = 'Password'
                type = 'text'
                value = {values.password}
                onChange = {onChange} />
            </label>

            <label> Terms of Service 
                <input name = 'Agree'
                type = 'checkbox'
                checked = {values.terms}
                onChange = {onChange} />
            </label>

            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default UserForm;