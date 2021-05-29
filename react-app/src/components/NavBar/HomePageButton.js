import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePageButton.css";

const HomePageButton = () => {
  const history = useHistory();

  const toHomePage = (e) => {
    document.querySelector(".navbar_menu").style.display="none";
    history.push("/")
    
  };

  return <div className="profile_button" onClick={toHomePage}>Home Page</div>;
};

export default HomePageButton;