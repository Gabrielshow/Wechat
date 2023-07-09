import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
//import "firebase/compat/app";
import { auth } from '../firebase';
//import * as firebase from 'firebase/app';

const login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2> Welcome to WeChat!</h2>

        <div className="login-button google" onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/> <br/>

        <div className="login-button facebook">
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default login
