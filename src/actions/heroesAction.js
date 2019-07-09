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
    return {
        type: actionType.HEROES_FETCHED
    }
}

export function heroFetchData() {
    return {
        type: actionType.HEROES_FETCHED
    }
}

export function changedSearchValue (name) {
    return {
        type: actionType.INPUT_NAME_HERO,
        payload: name
    }
}