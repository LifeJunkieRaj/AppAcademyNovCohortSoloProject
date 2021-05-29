import React from 'react';
import "./Comment.css";
import { useSelector, useDispatch } from "react-redux";
import { openCommentEditForm } from '../../store/comment';
import {getAllQuestions} from "../../store/ask_a_guru"
import {deleteComment} from "../../store/comment"


function Comment({comments}) {
  const dispatch= useDispatch();
  const user = useSelector(state => state.session.user);
  const openEditForm=(e)=>{
      let id= parseInt(e.target.id.split("_")[1]);
      console.log(id);
      let parent= e.target.parentNode.parentNode;
      let text_body= parent.querySelector(".textContent").textContent;
      console.log(text_body);
      dispatch(openCommentEditForm(id,text_body));
  }

  const handleDeleteComment=(e)=>{
    e.preventDefault();
    let id= parseInt(e.target.id.split("_")[1]);
    console.log(id);
    dispatch(deleteComment(id))
}
  const placeEditDeleteButton= (c)=>{
    if(c.user_id=== user.id){
      return (
        <div className="delete-button-container">
           <input className="editButton" type="button" id={"delete_"+c.id} value="Edit" onClick={openEditForm}/>
          <input className="deleteButton" type="button" id={"edit_"+c.id} value="Delete" onClick={handleDeleteComment}/>
        </div>
        )
    }
  }

  return (
    <div>
      <h1 className="comm_h1">Comments</h1>
      {comments && comments.map(c => 
        
          <div className="comment_container" key={c.id}>
            <div className="user_id_comm_highlight commentFlexContainer">
              <p className="CommentsUserName">User: {c.username}<br/> ANSWERED</p>
              {c.guru && <i className="fas fa-award"></i>}
              </div>
            <p className="textContent">{c.comment} </p>
            {placeEditDeleteButton(c)}
           
            <div className="separator_container">
              <hr className="rounded"></hr>
              <div className="rounded"></div>
              <hr className="rounded"></hr>
            </div>
          </div>
        
        )}
       
    </div>
  )
}

export default Comment;

