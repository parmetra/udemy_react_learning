import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}
const heroesSlice = createSlice({
	name: "heroes",
	initialState: initialState,
	reducers: {
		heroesFetching: (state) => { state.heroesLoadingStatus = "loading" },
		heroCreate:(state, action) => {
			state.heroes.push(action.payload)
		},
		heroDeleted:(state, action) => {
			state.heroes = state.heroes.filter(item => item.id !== action.payload)
		},
		heroesFetched:(state, action) => {
			state.heroesLoadingStatus = "idle";
			state.heroes = action.payload;
		},
		heroesFetchingError:(state) => {
			state.heroesLoadingStatus = "error";
		}
	}
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	heroCreate,
	heroDeleted
} = actions;