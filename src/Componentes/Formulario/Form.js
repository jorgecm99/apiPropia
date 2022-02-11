import React, { useState } from 'react';
import LoginForm from './LoginForm';
import '../Styles/form.css'

function Form () {
    const adminUser = {
        email: "jcorcoles86@gmail.com",
        password: "corcolotes86"
    }
    const [nombre, setNombre] = useState({user:"", email:""});
    const [error, setError] = useState("");
    
    const loginUser = details => {
        
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("logged in");
            setNombre({
                user: details.user,
                email: details.email
            });
        } else {
            console.log("did not match");
            setError("Details did not match")
        }
    }       
      

    const logoutUser = () => {
        setNombre({user:"", email:""});
    }
      
    return (
        <div className='login-form'>
            {(nombre.email !== "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{nombre.user}</span></h2>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={loginUser} error={error} />

            )}
        </div>
    );
};

export default Form;