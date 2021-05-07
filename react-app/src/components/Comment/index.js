import React from 'react';
import "./Comment.css";

function Comment({comments}) {
  return (
    <div>
      <h1 className="comm_h1">Comments</h1>
      {comments.map(c => 
        
          <div className="comment_container" key={c.id}>
            <div className="user_id_comm_highlight">User ID: {c.user_id} ANSWERED:</div>
            {c.comment}  
          </div>
        
        )}
       
    </div>
  )
}

export default Comment;

