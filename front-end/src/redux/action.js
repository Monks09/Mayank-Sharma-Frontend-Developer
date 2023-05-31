
export const fetchCapsulesThunkActionProvider = (pageValue) => {
    return async (dispatch, getState) => {
        const page = pageValue ? pageValue : getState().page;
        const { status, reuse_count, type } = getState().search_filters;
        // console.log(page);

        let res = await fetch(`https://monks-spacex-server.onrender.com/capsules?page=${page}&status=${status}&reuse_count=${reuse_count}&type=${type}`);
        let data = await res.json();
        // console.log(data);

        dispatch({
            type: "SET_CAPSULES_DATA",
            payload: data.capsules,
        })

    }
}

export const changePageThunkActionCreator = (newPage) => {
    return (dispatch, getState) => {
        dispatch({
            type: "CHANGE_PAGE",
            payload: newPage,
        })
    }
}

export const updateFiltersThunkActionCreator = (filters) => {
    return (dispatch, getState) => {
        dispatch({
            type: "UPDATE_FILTERS",
            payload: filters,
        })
    }

}
