import React from 'react';
import "./AskAGuru.css";

function AskAGuru({question, id}) {
  return (
    <div className="question_container">
      <div className="question_content">
        {question}
      </div>
    </div>
  )
}

export default AskAGuru;
