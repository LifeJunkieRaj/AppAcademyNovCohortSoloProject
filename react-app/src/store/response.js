const SHOW = "/Response_modal/show"
const HIDE = "/Response_modal/hide"
const LOAD = "/Response_modal/load";

const loadResponsesStore = (modal_status) => ({
  type: LOAD,
  payload: modal_status,
});


export const showResponses = () => ({type: SHOW})
export const hideResponses = () => ({type: HIDE})


export const addResponse = async (user_id, ask_a_guru_id, response_text) => {
  console.log("Add Response to question ID" + ask_a_guru_id)  
  const response = await fetch("/api/responses/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        ask_a_guru_id,
        response_text,
      }),
    });
    const data = await response.json();
    if (data.errors) throw new Error(data.errors);

  };

  export const setResponseQuestionNumber = (questionId) => async (dispatch) => {
    dispatch(loadResponsesStore(questionId));
  }

  const initialState = {questionNumber:-1, modal: false};
  const responseReducer = (state=initialState, action) => {
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
      default:
        return state;
    }
  }

  export default responseReducer;