import { all } from "redux-saga/effects";

import watchFetchHeroes from "./heroSaga";

export default function*() {
  yield all( [ watchFetchHeroes() ] );
}
