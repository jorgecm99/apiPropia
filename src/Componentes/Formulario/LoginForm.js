import React, {useState} from 'react';

function LoginForm ({Login, error}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (setterCallback) => (event) => {
        setterCallback(event.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        Login({ username, email, password })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='login-form-inside'>
                <h2>Login</h2>
                {error ? (<div className='error'>{error}</div>) : null}

                <div className='login-form-group'>
                    <label htmlFor='user'>Name:</label>
                    <input type="text" name='user' id='user' onChange={handleInputChange(setUsername)} value={username} />
                </div>

                <div className='login-form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name='email' id='email' onChange={handleInputChange(setEmail)} value={email} />
                </div>

                <div className='login-form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name='password' id='password' onChange={handleInputChange(setPassword)} value={password} />
                </div>

                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;
