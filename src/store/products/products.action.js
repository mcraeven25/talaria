import { createAction } from "../../utils/reducer.utils";
import { getProducts } from "../../utils/firebase-utils";

import { PRODUCTS_ACTION_TYPE } from "./products.types";

export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS, productsArray);

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPE.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const productsArray = await getProducts();
    dispatch(fetchProductsSuccess(productsArray));
  } catch (error) {
    dispatch(fetchProductsFailed(error));
  }
};
