import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Ichat!</h2>
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() => auth.signInWithRedirect(new FacebookAuthProvider())}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
