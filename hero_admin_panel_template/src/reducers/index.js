const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'loading',
    activeFilter: "all",
    filteredHeroes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                
                filteredHeroes: state.activeFilter === 'all' ? 
                                action.payload :
                                action.payload.filter(item => item.element === action.payload),
                heroesLoadingStatus: 'idle',
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETED':
            const heroArr = state.heroes.filter(item => item.id !== action.payload)
            return {
                ...state,
                heroes: heroArr,
                filteredHeroes: state.activeFilter === 'all' ? 
                                heroArr :
                                heroArr.filter(item => item.element === state.activeFilter)
            }
        case 'HERO_CREATE':
            let newHeroArr = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newHeroArr,
                filteredHeroes: state.activeFilter === 'all' ? 
                                newHeroArr :
                                newHeroArr.filter(item => item.element === state.activeFilter)
            }
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
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all' ? 
                                state.heroes :
                                state.heroes.filter(item => item.element === action.payload)
            }
        default: return state
    }
}

export default reducer;