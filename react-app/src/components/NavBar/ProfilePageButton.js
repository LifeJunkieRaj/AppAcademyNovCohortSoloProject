import React from "react";
import { useHistory } from "react-router-dom";
import "./ProfilePageButton.css";

const ProfilePageButton = () => {
  const history = useHistory();

  const toProfilePage = (e) => {
    document.querySelector(".navbar_menu").style.display="none";
    history.push("/ProfilePage")
    
  };

  return <div className="profile_button" onClick={toProfilePage}>Profile Page</div>;
};

export default ProfilePageButton;