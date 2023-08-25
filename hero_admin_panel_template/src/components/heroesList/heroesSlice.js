import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";


const heroesAdapter = createEntityAdapter();

const initialState = heroesAdapter.getInitialState({
	heroesLoadingStatus: 'idle'
});

export const fetchHeroes = createAsyncThunk(
	'heroes/fetchHeroes',
	async () => {
		const {request} = useHttp();
		return await request("http://localhost:3001/heroes");
	}
);

const heroesSlice = createSlice({
	name: "heroes",
	initialState: initialState,
	reducers: {
		// heroesFetching: (state) => { state.heroesLoadingStatus = "loading" },
		heroCreate:(state, action) => {
			heroesAdapter.addOne(state, action.payload);
		},
		heroDeleted:(state, action) => {
			heroesAdapter.removeOne(state, action.payload);
			// state.heroes = state.heroes.filter(item => item.id !== action.payload)
		},
		// heroesFetched:(state, action) => {
		// 	state.heroesLoadingStatus = "idle";
		// 	state.heroes = action.payload;
		// },
		// heroesFetchingError:(state) => {
		// 	state.heroesLoadingStatus = "error";
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHeroes.pending, (state) => { state.heroesLoadingStatus = "loading" })
			.addCase(fetchHeroes.fulfilled, (state, action) => {
												state.heroesLoadingStatus = "idle";
												heroesAdapter.setAll(state, action.payload)
											})
			.addCase(fetchHeroes.rejected, (state) => { state.heroesLoadingStatus = "error" })
			.addDefaultCase(() => {})
	}
});

const {actions, reducer} = heroesSlice;

export default reducer;

const {selectAll} = heroesAdapter.getSelectors(state => state.heroes);

export const filteredHeroesSelector = createSelector(
	state => state.filters.activeFilter,
	selectAll,
	(filter, heroes) => {
		if (filter === 'all') return heroes;
		else return heroes.filter(item => item.element === filter)
	}

);

export const {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	heroCreate,
	heroDeleted
} = actions;