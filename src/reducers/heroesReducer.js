import * as actionType from "../types/heroesActionTypes";

const initialState = {
    heroes: [],
    searchValue: '',
    isLoading: false
};

export function heroes(state = initialState, action) {
    switch (action.type) {
        case actionType.HEROES_SUCCESS:
            return {...state, heroes: action.payload, isLoading: false};
        case actionType.INPUT_NAME_HERO:
            return {...state, searchValue: action.payload}
        case actionType.HEROES_LOADING:
            return {...state, isLoading: true}
        default:
            return state;
    }
}
