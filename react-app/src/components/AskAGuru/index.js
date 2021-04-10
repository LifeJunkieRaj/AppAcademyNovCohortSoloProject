import React from 'react';
import "./AskAGuru.css";
import Comment from "../Comment";
import Response from "../Response";

function AskAGuru({question}) {
  return (
    <div className="question_container">
      
      <div className="guru_id_highlight">
        User ID: {question.user_id} ASKED
      </div>
      <div>
        Category: {question.name}
      </div>
      <div>
        Description: {question.description}
      </div>
      <div className="question_content">
        Question: {question.question}
      </div>
        <div className="flex_container">
          <div className="flex_item">
            <Response responses={question.responses} />
          </div>
          <div className="flex_item">
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
    </div>
  )
}

export default AskAGuru;
