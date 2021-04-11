import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LogoutButton.css";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    // dispatch(logout());
    return history.push("/");
  };

  return <div className="logout_button" onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
