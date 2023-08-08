import { createReducer } from "@reduxjs/toolkit";

import { heroCreate, heroDeleted, heroesFetched, heroesFetching, heroesFetchingError } from "../actions";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroCreate, (state, action) => {
//             state.heroes.push(action.payload)
//         })
//         .addCase(heroDeleted, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload)
//         })
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = "loading";
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = "idle";
//             state.heroes = action.payload;
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = "error";
//         })
//         .addDefaultCase(() => {})
// })


// Не работает в TS
const heroes = createReducer(initialState, {
    [heroCreate]:(state, action) => {
        state.heroes.push(action.payload)
    },
    [heroDeleted]:(state, action) => {
        state.heroes = state.heroes.filter(item => item.id !== action.payload)
    },
    [heroesFetching]:(state) => {
        state.heroesLoadingStatus = "loading";
    },
    [heroesFetched]:(state, action) => {
        state.heroesLoadingStatus = "idle";
        state.heroes = action.payload;
    },
    [heroesFetchingError]:(state) => {
        state.heroesLoadingStatus = "error";
    }},
    [],
    state => state
);


// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_DELETED':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload)
//             }
//         case 'HERO_CREATE':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }
//         default: return state
//     }
// }

export default heroes;