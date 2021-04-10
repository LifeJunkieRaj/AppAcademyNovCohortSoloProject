import React from 'react';
import "./Response.css";

function Response({responses}) {
  return (
    <div>
        <h1 className="res_h1">Responses</h1>
      {responses.map(r => 
        
          <div className="response_container" key={r.id}>
              <div className="user_id_res_highlight">GURU Class User ID: {r.user_id} RESPONDED:</div>
              {r.response}  
          </div>
        
        )}
        
    </div>
  )
}

export default Response;