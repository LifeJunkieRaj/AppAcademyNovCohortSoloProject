import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import "./SignUpForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user)
  const loaded = useSelector(state => state.session.loaded)

  const onSignUp = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(signUp(username, first_name, last_name, email, password));
      }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirst_name(e.target.value);
  };

  const updateLastName = (e) => {
    setLast_name(e.target.value);
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

  if(user) return <Redirect to="/" />

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
        {/* <label>User Name</label> */}
        <input
          type="text"
          name="first_name"
          onChange={updateFirstName}
          value={first_name}
          className="signup_first_name"
          placeholder="Enter First Name"
        ></input>
      </div>
      <div>
        {/* <label>User Name</label> */}
        <input
          type="text"
          name="last_name"
          onChange={updateLastName}
          value={last_name}
          className="signup_last_name"
          placeholder="Enter Last Name"
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
