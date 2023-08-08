const initialState = {
    filtersLoadingStatus: 'loading',
    activeFilter: "all"
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTER_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTER_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_CHANGING':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }
}

export default filters;