import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../services/auth";
import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login_form_container">
    <form className="login_form" onSubmit={onLogin}>
      <h1>Guru Time</h1>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          className="login_email"
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          className="login_password"
        />
        
      </div>
      <div><button className="login_button" type="submit">Login</button></div>
      <p>Not a member? <NavLink to="/sign-up">SIGN UP</NavLink></p>
    </form>
    </div>
  );
};

export default LoginForm;
