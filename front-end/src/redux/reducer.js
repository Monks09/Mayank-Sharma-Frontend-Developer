const initialState = {
    capsules: [],
    page: 1,
    search_filters: {
        status: '',
        reuse_count: '',
        type: '',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CAPSULES_DATA":
            return {
                ...state,
                capsules: action.payload,
            }
        case "CHANGE_PAGE":
            return {
                ...state,
                page: action.payload,
            }
        case "UPDATE_FILTERS":
            return {
                ...state,
                search_filters: action.payload,
            }
        default:
            return state;
    }

}

export default reducer;