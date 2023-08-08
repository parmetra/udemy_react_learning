export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filterFetching());
		request("http://localhost:3001/filters")
			.then(data => dispatch(filterFetched(data)))
			.catch(() => dispatch(filterFetchingError()))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}

export const heroCreate = (newHero) => {
    return {
        type: 'HERO_CREATE',
        payload: newHero
    }
}

export const filterFetching = () => {
    return {
        type: 'FILTER_FETCHING',
    }
}

export const filterFetched = (filters) => {
    return {
        type: 'FILTER_FETCHED',
        payload: filters
    }
}

export const filterFetchingError = () => {
    return {
        type: 'FILTER_FETCHING_ERROR',
    }
}

export const filterChanging = (filter) => {
    return {
        type: 'FILTER_CHANGING',
        payload: filter
    }
}




