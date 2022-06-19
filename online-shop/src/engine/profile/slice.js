// Modules
import { createSlice } from '@reduxjs/toolkit';

// Actions
import productsAsyncActions from './async-actions';

const initialState = {
  pending: false,
  profileData: {},
  isLogIn: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsAsyncActions.getAllProducts.pending, (state) => {
        state.pending = true;
      })
      .addCase(productsAsyncActions.getAllProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload;
      })
      .addCase(productsAsyncActions.getFilterProduct.pending, (state) => {
        state.pending = true;
      })
      .addCase(productsAsyncActions.getFilterProduct.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload;
      })
      .addCase(productsAsyncActions.getCurrentProduct.pending, (state) => {
        state.pending = true;
      })
      .addCase(productsAsyncActions.getCurrentProduct.fulfilled, (state, action) => {
        state.pending = false;
        state.currentProduct = action.payload;
      });
  },
});

export default profileSlice;
