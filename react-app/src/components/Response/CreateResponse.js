import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideResponses, Response, addResponse } from "../../store/response"
import getCurrentUserQuestions from "../../store/ask_a_guru";
import "./CreateResponse.css"

const CreateResponse = ({ question_id }) => {
    const dispatch = useDispatch();
    const hideModal = () => dispatch(hideResponses())

    const display = useSelector(state => state.responses.modal)
    const sessionUser = useSelector(state => state.session.user)
    const [body, updateBody] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault()
        addResponse(sessionUser.id, question_id, body)
            .then(() => {
                dispatch(hideResponses())
                // dispatch(getCurrentUserQuestions(1))
            })
            .catch((err) => console.log(err))
    }
    
    return display ? (
        <div className="modal_background" onClick={hideModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h1 className="Response_modal_title">Add Your Response</h1>
                <form className="Response_modal_container">
                    <label>Enter Your Response</label>
                    <textarea className="Response_modal_question" 
                      rows="5"
                      cols="30"
                      value={body}
                      onChange={({target:{value}}) => updateBody(value)}
                      />
                      
                      <button className="Response_modal_submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    ):null;
}

export default CreateResponse;
