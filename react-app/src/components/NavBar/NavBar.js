import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import CreateQuestion from '../AskAGuru/AAGquestion'
import "./NavBar.css"




const NavBar = ({ authenticated, setAuthenticated }) => {
  let visible = false;
  let showMenu = () => {
    let menu = document.querySelector(".navbar_menu");
    if (visible == false) {
      menu.style.display="block";
      visible = true;
    }
    else {
      menu.style.display="none";
      visible = false;
    }
  }

  let displayLinks;
    if(authenticated) {
      displayLinks = (
        <nav>
          <CreateQuestion />
      <ul className="navbar_flex_container">
        {/* <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        <li className="navbar_title"><i className="fas fa-business-time"></i>  It's Time to Get Guruud!!!</li>
        <li>
          <div className="menu_container">
            <i onClick={showMenu} className="fas fa-caret-square-down menu_dropdown"></i>
            <div className="navbar_menu"> <LogoutButton setAuthenticated={setAuthenticated} /></div>
          </div>
         
        </li>
      </ul>
    </nav>
      )
    }
    else {
      displayLinks = null;
    }
  return displayLinks;
    

}

export default NavBar;