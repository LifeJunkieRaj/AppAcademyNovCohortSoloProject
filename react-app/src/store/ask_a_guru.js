const LOAD = "/ask_a_guru/load";
const SHOW = "/ask_a_guru/show";
const HIDE = "/ask_a_guru/hide";
const LOADCR = "/ask_a_guru/loadcr";
const EDITCOMMENT= "/ask_a_guru/editComment";
const load = (questions) => ({
    type: LOAD,
    payload: questions,
});

const load_user_comments_responses = (questions) => ({
    type: LOADCR,
    payload: questions,
});

export const show = () => ({type: SHOW})
export const hide = () => ({type: HIDE})

export const getCurrentUserQuestions = (userId) => async (dispatch) => {
    const response = await fetch(`/api/ask_a_guru/${userId}/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.status, response.ok)
    if (response.ok) {
        const {questions} = await response.json();
        dispatch(load(questions));
    }
};

export const getAllQuestions = () => async (dispatch) => {
    const response = await fetch(`/api/ask_a_guru/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.status, response.ok)
    if (response.ok) {
        const {questions} = await response.json();
        
        dispatch(load(questions));
    }
};

export const createQuestion = async (text_body, category, user_id) => {
   
    const response = await fetch('/api/ask_a_guru/', {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({text_body, category, user_id: user_id})
    })

    const result = await response.json();
    if (result.errors) throw new Error(result.errors);
}

export const deleteQuestion = async (questionId) => {
    const response = await fetch(`/api/ask_a_guru/question/${questionId}/`, { 
        method: "DELETE"
    });
    if (!response.ok) throw response
}

export const getQuestionsByCommentsAndResponses = (userId) => async (dispatch) => {
    const response = await fetch(`/api/ask_a_guru/comments_responses/${userId}/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.status, response.ok)
    if (response.ok) {
        const {filtered_questions} = await response.json();
        dispatch(load_user_comments_responses(filtered_questions));
    }
};




const initialState = {questions: [], filtered_questions: [], modal: false};
const askAGuruReducer = (state=initialState, action) => {
    let newState;
    switch (action.type){
        case LOAD:
            newState = Object.assign({}, state);
            newState.questions = action.payload;
            return newState;
        case LOADCR:
            newState = Object.assign({}, state);
            newState.filtered_questions = action.payload;
            return newState;
        case SHOW:
            return {...state, modal:true}
        case HIDE:
            return {...state, modal:false}
        
        default:
            return state;
    }
}

export default askAGuruReducer;