import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import ProfilePageButton from './ProfilePageButton';
import LogoutButton from '../auth/LogoutButton';
import CreateQuestion from '../AskAGuru/AAGquestion';
import CreateComment from '../Comment/CreateComment';
import CreateResponse from '../Response/CreateResponse';
import {search} from '../../store/nav_bar';
import "./NavBar.css"




const NavBar = () => {
  let visible = false;
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const history = useHistory();
  const user = useSelector((state) => state.session.user)
  const commentQuestionId = useSelector(state => state.comments.questionNumber)
  const responseQuestionId = useSelector(state => state.responses.questionNumber)
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
  
  // const submitQuery = () => {
  //   const submission = {name: query}
  // }

  const getSearchData = () => {
    dispatch(search(query))
    history.push("/SearchResultsPage");
  }
 

  let displayLinks;
    if(user) {
      displayLinks = (
        <nav>
          <CreateQuestion />
          <CreateComment question_id = {commentQuestionId}/>
          <CreateResponse question_id = {responseQuestionId}/>
          {/* <CreateComment /> */}
      <ul className="navbar_flex_container">
        <li className="navbar_title"><NavLink to="/" exact={true} ><i className="fas fa-business-time"></i>  It's Time to Get Guruud!!!</NavLink></li>
        <li className="searchBar">
          <input type="text" placeholder="Search Here" value={query} onChange={(e) => setQuery(e.target.value)}></input>
          <i onClick={getSearchData} className="fas fa-search"></i>
        </li>
        <li>
          <div className="menu_container">
            <div className="menu_dropdown" onClick={showMenu}>
            {user.first_name} {user.last_name}  <i  className="fas fa-caret-square-down"></i>
            </div>
            <div className="navbar_menu">
               <ProfilePageButton className="menu_button" />
               <LogoutButton className="menu_button" />
            </div>
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