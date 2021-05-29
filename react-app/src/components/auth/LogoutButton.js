import React from "react";
import { logout } from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LogoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = (e) => {
    document.querySelector(".navbar_menu").style.display="none";
    dispatch(logout());
    
  };

  return <div className="logout_button" onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
