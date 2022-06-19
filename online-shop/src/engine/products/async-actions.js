// Modules
import { createAsyncThunk } from '@reduxjs/toolkit';

// Mocks
import { cardArray } from '../../Constants/mockProductCard';

const getAllProducts = createAsyncThunk('/getAllProducts', async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(cardArray);
    }, 700);
  }).then((res) => res);
});

const getCurrentProduct = createAsyncThunk('/getCurrentProduct', async (currentProductId) => {
  return new Promise((res) => {
    setTimeout(() => {
      const result = cardArray.find((productItem) => productItem.id == currentProductId);
      res(result);
    }, 700);
  }).then((res) => res);
});

const getFilterProduct = createAsyncThunk('/getfilterProduct', async (searchResult) => {
  console.log(searchResult, 'resultsearch');
  return new Promise((res) => {
    setTimeout(() => {
      if (searchResult == '') {
        return res(cardArray);
      } else {
        const result = cardArray.filter((productItem) => {
          return productItem.productName === searchResult;
        });
        res(result);
      }
    }, 700);
  }).then((res) => res);
});
const productsAsyncActions = {
  getAllProducts,
  getCurrentProduct,
  getFilterProduct,
};

export default productsAsyncActions;
