import React from 'react';
import "./AskAGuru.css";
import Comment from "../Comment";
import Response from "../Response";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuestion, getCurrentUserQuestions } from "../../store/ask_a_guru"

function AskAGuru({question}) {
  const currentUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const deleteQuestionAAG = () => {
    
    deleteQuestion(question.id)
      .then(() => dispatch(getCurrentUserQuestions(currentUser.id)))  
  }

    return (
    <div className="question_container">
      <div className="cat_container_box">
        <div className="cat_name">
          Category: {question.name}
        </div>
          <div className="cat_description_divider"></div>
        <div className="description_text">
          Description: {question.description}
        </div>
      </div>
      <div className="guru_id_highlight">
        User ID: {question.user_id} ASKED:
      </div>
      <div className="question_content">
        {question.question}
      </div>
        <div className="flex_container_res_comm">
          <div className="flex_item_res_comm">
            <Response responses={question.responses} />
          </div>
          <div className="flex_item_res_comm">
            <Comment comments={question.comments} />
          </div>
        </div>
        <div className="flex_container">
          <div className="response_button"><i className="far fa-comment-alt"></i> Add Response</div>
          <div className="comment_button"><i className="far fa-comment-alt"></i> Add Comment</div>
          <div className="votes_container">
            <div className="up"><i className="fas fa-chevron-up"></i></div>
            <div className="vote_numbers">69</div>
            <div className="down"><i className="fas fa-chevron-down"></i></div>
          </div>
        </div>
        <div className="delete_button_container">
          {currentUser && currentUser.id === question.user_id && <div onClick={deleteQuestionAAG} className="delete_AAG_button"><i className="fas fa-trash-alt"></i> Delete</div>}
        </div>
    </div>
  )
}

export default AskAGuru;
