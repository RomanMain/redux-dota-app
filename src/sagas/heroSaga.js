import { takeEvery, put, call } from "redux-saga/effects";
import { HEROES_FETCHED } from "../types/heroesActionTypes";
import { heroesIsLoading, heroesFetchDataSuccess } from "../actions/heroesAction";

export default function* watchFetchHeroes() {
  yield takeEvery(HEROES_FETCHED, fetchHeroes);
}

function* fetchHeroes() {
  try {
    yield put(heroesIsLoading());
    const heroes = yield call(
      () => fetch("https://api.opendota.com/api/heroStats").then(res => res.json())
    );
    yield put(heroesFetchDataSuccess(heroes));
  } 
  catch (error) {
    yield put(heroesIsLoading());
  }
}