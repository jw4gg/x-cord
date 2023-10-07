import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

  return (
    <div className='login'>
          <div className='login_logo'>
            <img
                src="https://github.com/jw4gg/x-cord/blob/main/logo.png?raw=true"
                alt=""
            />
        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;