const LOAD = "/ask_a_guru/load";

const load = (questions) => ({
    type: LOAD,
    payload: questions,
});

export const getCurrentUserQuestions = (userId) => async (dispatch) => {
    console.log()
    const response = await fetch(`/api/ask_a_guru/${userId}/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.status, response.ok)
    if (response.ok) {
        const {questions} = await response.json();
        console.log('Here are the questions ~~~~~~>', questions)
        dispatch(load(questions));
    }
};

const initialState = {questions: []};
const askAGuruReducer = (state=initialState, action) => {
    let newState;
    switch (action.type){
        case LOAD:
            newState = Object.assign({}, state);
            newState.questions = action.payload;
            return newState;
        default:
            return state;
    }
}

export default askAGuruReducer;