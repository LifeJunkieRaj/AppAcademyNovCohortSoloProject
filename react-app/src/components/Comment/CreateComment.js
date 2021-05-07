import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideComments, comment, addComment } from "../../store/comment"
import "./CreateComment.css"
import getCurrentUserQuestions from "../../store/ask_a_guru";

const CreateComment = ({ question_id }) => {
    const dispatch = useDispatch();
    const hideModal = () => dispatch(hideComments())

    const display = useSelector(state => state.comments.modal)
    const sessionUser = useSelector(state => state.session.user)
    const [body, updateBody] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault()
        addComment(sessionUser.id, question_id, body)
            .then(() => {
                dispatch(hideComments())
                dispatch(getCurrentUserQuestions(1))
            })
            .catch((err) => console.log(err))
    }
    
    return display ? (
        <div className="modal_background" onClick={hideModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h1 className="comment_modal_title">Add Your Comment</h1>
                <form className="comment_modal_container">
                    <label>Enter Your Comment</label>
                    <textarea className="comment_modal_question" 
                      rows="5"
                      cols="30"
                      value={body}
                      onChange={({target:{value}}) => updateBody(value)}
                      />
                      
                      <button className="comment_modal_submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    ):null;
}

export default CreateComment;
