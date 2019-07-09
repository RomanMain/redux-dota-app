import * as actionType from "../types/heroesActionTypes";

export function heroesFetchDataSuccess(heroes) {
    return {
        type: actionType.HEROES_SUCCESS,
        payload: heroes
    };
}

export function heroFetchDataSuccess(hero) {
    return {
        type: actionType.HERO_SUCCESS,
        payload: hero
    };
}

export function heroesIsLoading () {
    return {
        type: actionType.HEROES_LOADING
    }
}

export function heroesFetchData() {
    return (dispatch) => {
        dispatch(heroesIsLoading());
        fetch('https://api.opendota.com/api/heroStats')
            .then((response) => response.json())
            .then((heroes) => dispatch(heroesFetchDataSuccess(heroes)))
    };
}

export function heroFetchData() {
    return (dispatch) => {
        dispatch(heroesIsLoading())
        fetch('https://api.opendota.com/api/heroes')
            .then((response) => response.json())
            .then((hero) => dispatch(heroesFetchDataSuccess(hero)))
    }
}

export function changedSearchValue (name) {
    return {
        type: actionType.INPUT_NAME_HERO,
        payload: name
    }
}