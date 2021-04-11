import React, { useState } from "react";
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../services/auth';
import "./SignUpForm.css";

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup_form_container">
    <form className="signup_form" onSubmit={onSignUp}>
      <h1>Join Us!</h1>
      <div>
        {/* <label>User Name</label> */}
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          className="signup_username"
          placeholder="Enter Username"
        ></input>
      </div>
      <div>
        {/* <label>Email</label> */}
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          className="signup_email"
          placeholder="Enter email"
        ></input>
      </div>
      <div>
        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          className="signup_password"
          placeholder="Create Password"
        ></input>
      </div>
      <div>
        {/* <label>Repeat Password</label> */}
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="signup_password"
          placeholder="Confirm Password"
        ></input>
      </div>
      <button className="signup_button" type="submit">Sign Up</button>
      <p>Already a Member? <NavLink to="/login">LOGIN</NavLink></p>
    </form>
      </div>
  );
};

export default SignUpForm;
