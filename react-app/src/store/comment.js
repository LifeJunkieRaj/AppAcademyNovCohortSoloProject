const SHOW = "/comment_modal/show"
const HIDE = "/comment_modal/hide"
const LOAD = "/comment_modal/load";
const LOAD_COMMENT_EDIT_MODAL="/comment/loadCommentModal";
const HIDE_COMMENT_EDIT_MODAL="/comment/hideCommentModal";
const SET_SELECTED_COMMENT="/comment/setSelectedComment";
const EDIT_COMMENT= "/comment/editComment";
const DELETE_COMMENT="/comment/deleteComment";

const loadCommentsStore = (modal_status) => ({
  type: LOAD,
  payload: modal_status,
});


export const showComments = () => ({type: SHOW})
export const hideComments = () => ({type: HIDE})
export const loadEditForm =()=>({
  type:LOAD_COMMENT_EDIT_MODAL,

})
const hideEditForm=()=>({
  type:HIDE_COMMENT_EDIT_MODAL,
  
})
const setSelectedComment=(id, comment_text)=>({
  type:SET_SELECTED_COMMENT,
  payload:{id,comment_text}
})

export const createEditCommentAction=()=>({type: EDIT_COMMENT})
const createDeleteCommentAction= ()=>({type:EDIT_COMMENT})


export const addComment = async (user_id, ask_a_guru_id, comment) => {
  console.log("Add Comment to question ID" + ask_a_guru_id)  
  const response = await fetch("/api/comments/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        ask_a_guru_id,
        comment,
      }),
    });
    const data = await response.json();
    if (data.errors) throw new Error(data.errors);

  };

  export const setQuestionNumber = (questionId) => async (dispatch) => {
    dispatch(loadCommentsStore(questionId));
  }
  export const openCommentEditForm= (id, comment_text)=>async (dispatch)=>{
    dispatch(loadEditForm());
    dispatch(setSelectedComment(id, comment_text));
  }
  export const hideCommentEditForm= ()=>{
    return hideEditForm()
  }
  export const editComment=(id,text_body)=>async (dispatch)=>{
    const response =  await fetch(`/api/comments/${id}/edit`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body:JSON.stringify({text_body})
    });
    console.log(response.status, response.ok)
    if (response.ok) {
        const updatedComment = await response.json();
        dispatch(createEditCommentAction())
    }
}


export const deleteComment= (id)=> async (dispatch) => {
  const response =  await fetch(`/api/comments/${id}/delete`, {
    headers: {
        "Content-Type": "application/json",
    },
    method: "DELETE",
    body:JSON.stringify({id})
});
console.log(response.status, response.ok)
if (response.ok) {
    
    dispatch(createDeleteCommentAction())
}
}


  const initialState = {questionNumber:-1,editCommentModalStatus:false, modal: false, selectedComment:{}};
  const commentReducer = (state=initialState, action) => {
    let newState;
    switch (action.type){
      case LOAD:
        newState = Object.assign({}, state);
        newState.questionNumber = action.payload;
        return newState;
      case SHOW:
        return {...state, modal:true}
      case HIDE:
        return {...state, modal:false}
      case LOAD_COMMENT_EDIT_MODAL:
        return {...state, editCommentModalStatus:true}
      case HIDE_COMMENT_EDIT_MODAL:
        return {...state, editCommentModalStatus:false}
      case SET_SELECTED_COMMENT:
        return {...state, selectedComment:action.payload}
      case EDIT_COMMENT:
        return {...state}
      case DELETE_COMMENT:
        return {...state}
      default:
        return state;
    }
  }

  export default commentReducer;