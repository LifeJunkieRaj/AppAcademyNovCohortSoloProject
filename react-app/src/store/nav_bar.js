const GET = "search/get"

const load = (foundItems) => ({
    type: GET,
    foundItems
})

export const search = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/${query}/`)
    const foundItems = await res.json()
    dispatch(load(foundItems.foundItems))
    return foundItems
}

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case GET:
            return {...state, found: action.foundItems}
        default: 
            return state
    }
}

export default searchReducer;