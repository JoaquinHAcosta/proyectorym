import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites : [],
    allCharacters : []
}

const reducer = ( state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites : [...state.allCharacters, payload],
        //         allCharacters: [...state.allCharacters, payload]
        //     }
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload 
            };
        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites : state.myFavorites.filter( (char) => char.id !== Number(payload))
        //     }
        case 'REMOVE_FAV':
            return { 
                ...state, 
                myFavorites: payload 
            };
        case FILTER:
                const filterGenre = state.allCharacters.filter( (char) => char.gender === payload)
            return {
                ...state,
                myFavorites:
                payload === "allCharacters"
                ? [...state.allCharacters]
                : filterGenre
            }
        case ORDER:
                const orderChars = [...state.allCharacters]
            return {
                ...state,
                myFavorites: 
                payload === "A"
                ? orderChars.sort((a, b) => a.id - b.id)
                : orderChars.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state}
    }
}

export default reducer;