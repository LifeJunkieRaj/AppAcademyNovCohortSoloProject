const GET = "search/get"

const load = (query,foundItems) => ({
    type: GET,
    payload:{query,foundItems}
})

export const search = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/${query}/`)
    const foundItems = await res.json()
    dispatch(load(query,foundItems.foundItems))
    return foundItems
}

const searchReducer = (state = {found:{},query:""}, action) => {
    switch (action.type) {
        case GET:
            return {...state, found: action.payload.foundItems, query:action.payload.query}
        default: 
            return state
    }
}

export default searchReducer;