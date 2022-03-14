import React, { useState } from 'react';
import LoginForm from './LoginForm';
import '../Styles/form.css'

// this, obviously, won't be here, but I guess you use it as a simple validation,
// so I've extracted it outside the function, so that it doesn't get instantiated
// in every render. It doesn't make any sense, as they won't change.
const VALID_ADMIN_CREDENTIALS = {
    email: "example@email.com",
    password: "password"
}

function Form () {
    const [user, setUser] = useState({username:"", email:""});
    const [error, setError] = useState("");

    const handleLogin = (credentials) => {
        if(credentials.email === VALID_ADMIN_CREDENTIALS.email && credentials.password === VALID_ADMIN_CREDENTIALS.password) {
            console.log("logged in");
            setError('');
            setUser(credentials);
            return;
        }

        console.log("did not match");
        setError("Details did not match")
    }


    const handleLogout = () => {
        setUser({username:"", email:""});
    }

    return (
        <div className='login-form'>
            {(user.email !== "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={handleLogin} error={error} />

            )}
        </div>
    );
}

export default Form;
