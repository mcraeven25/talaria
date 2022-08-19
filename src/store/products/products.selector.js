import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const selectProductReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.products
);

export const selectProductsMap = createSelector([selectProducts], (products) =>
  products.reduce((acc, product) => {
    const { title, category } = product;
    acc[title.toLowerCase()] = category;
    return acc;
  }, {})
);

export const selectProductIsLoading = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.isLoading
);
