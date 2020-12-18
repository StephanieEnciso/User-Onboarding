import React from 'react';

function User(props) {
    const {userInfo} = props
    return (
        <div className = 'user'>
            <h3>Name: {userInfo.name}</h3>
            <p>Email: {userInfo.email}</p>
            <p>Password: {userInfo.password}</p>
            <p>Terms of Service Accepted: {userInfo.terms}</p>
        </div>
    )
};

export default User;