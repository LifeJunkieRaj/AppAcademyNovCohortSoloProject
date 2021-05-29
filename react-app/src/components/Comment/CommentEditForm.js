import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {hideCommentEditForm, editComment} from "../../store/comment"


const CommentsEditForm = () => {
    const dispatch = useDispatch();
    const hideModal = () => dispatch(hideCommentEditForm())
    const comment= useSelector(state =>state.comments.selectedComment)
    const display = useSelector(state => state.comments.editCommentModalStatus)
    
    
    const sessionUser = useSelector(state => state.session.user)
    const [body, updateBody] = useState("");
   
    const [errors, setErrors] = useState([]);
    useEffect(()=>{
        console.log(comment.comment_text);
        updateBody(comment.comment_text);
    }, [dispatch,comment])

    const onSubmit = (e) => {
      e.preventDefault();
       
       
        dispatch(editComment(comment.id, body));
        updateBody("")
        dispatch(hideModal());
        

    }
    

    return display ? (
        <div className="modal_background" onClick={hideModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
            


                <h1 className="comment_modal_title">Edit the comment</h1>
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

export default CommentsEditForm;

