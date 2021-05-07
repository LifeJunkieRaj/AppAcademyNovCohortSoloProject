import React from "react";
import { useHistory } from "react-router-dom";
import "./ProfilePageButton.css";

const ProfilePageButton = () => {
  const history = useHistory();

  const toProfilePage = (e) => {
    history.push("/ProfilePage")
    
  };

  return <div className="profile_button" onClick={toProfilePage}>Profile Page</div>;
};

export default ProfilePageButton;