import { takeLatest, all, call, put } from "redux-saga/effects";

import { getProducts } from "../../utils/firebase-utils";

import { fetchProductsSuccess, fetchProductsFailed } from "./products.action";

import { PRODUCTS_ACTION_TYPE } from "./products.types";

export function* fetchProductsAsync() {
  try {
    const productsArray = yield call(getProducts);
    yield put(fetchProductsSuccess(productsArray));
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
