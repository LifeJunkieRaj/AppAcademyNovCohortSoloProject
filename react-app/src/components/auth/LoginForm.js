import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user)
  const loaded = useSelector(state => state.session.loaded)

  const demoLogin = () => {
    dispatch(login("demo@lition.com", "password"))
  }

  const onLogin = async (e) => {
    e.preventDefault();
    dispatch(login(email, password))
      .catch(setErrors)      
   };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/"/>;
  }

   return (
   
    <div className="login_form_container">
    <form className="login_form" onSubmit={onLogin}>
      <h1>Guru Time</h1>
      <div>
        {errors && errors.map((error) => (
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
      <button className="demo_user_button" onClick={demoLogin} type="button">Demo User Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
