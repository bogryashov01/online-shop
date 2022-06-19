const selfSelector = (state) => state.products;
const pendingSelector = (state) => selfSelector(state).pending;

const allProductsSelector = (state) => selfSelector(state).products;
const currentProductSelector = (state) => selfSelector(state).currentProduct;

const productSelectors = {
  pending: pendingSelector,
  allProducts: allProductsSelector,
  currentProduct: currentProductSelector,
};

export default productSelectors;
