import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtersLoadingStatus: 'idle',
    activeFilter: "all",
	filters: []
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterFetching: state => {state.filtersLoadingStatus = 'loading'; },
		filterFetched: (state, action) => {
			state.filters = action.payload;
			state.filtersLoadingStatus = 'idle';
		},
		filterFetchingError: state => {state.filtersLoadingStatus = 'loading'},
		filterChanging: (state, action) => {state.activeFilter = action.payload}
	}
});

const {actions, reducer} = filterSlice;
export default reducer;
export const {
	filterChanging,
	filterFetching,
	filterFetched,
	filterFetchingError
} = actions;