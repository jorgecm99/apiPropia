import React, {useState} from 'react';

function LoginForm ({Login, error}) {
    const [ details, setDetails] = useState({user:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='login-form-inside'>
                <h2>Login</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <div className='login-form-group'>
                    <label htmlFor='user'>Name:</label>
                    <input type="text" name='user' id='user' onChange={e => setDetails({...details, user: e.target.value})} value={details.user}></input>
                </div>

                <div className='login-form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>

                <div className='login-form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <input type="submit">Login</input>
            </div>
        </form>
    );
};

export default LoginForm;