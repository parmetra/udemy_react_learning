import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    filtersLoadingStatus: 'idle',
    activeFilter: "all",
	filters: []
};

export const fetchFilters = createAsyncThunk(
	'filters/fetchFilters',
	async () => {
		const {request} = useHttp();
		return await request("http://localhost:3001/filters");
	}
);

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterChanging: (state, action) => {state.activeFilter = action.payload}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilters.pending, (state) => { state.filtersLoadingStatus = "loading" })
			.addCase(fetchFilters.fulfilled, (state, action) => {
												state.filtersLoadingStatus = "idle";
												state.filters = action.payload;
											})
			.addCase(fetchFilters.rejected, (state) => { state.filtersLoadingStatus = "error" })
			.addDefaultCase(() => {})
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