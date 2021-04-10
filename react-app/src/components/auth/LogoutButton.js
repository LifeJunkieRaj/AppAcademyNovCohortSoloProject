import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    // dispatch(logout());
    return history.push("/");
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
