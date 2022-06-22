// Modules
import { createSlice } from '@reduxjs/toolkit';

// Actions
import profileAsyncActions from './async-actions';

const initialState = {
  pending: false,
  profileData: {},
  isLogIn: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(profileAsyncActions.getProfileData.pending, (state) => {
        state.pending = true;
      })
      .addCase(profileAsyncActions.getProfileData.fulfilled, (state, action) => {
        state.pending = false;
        state.profileData = action.payload;
      });
    //   .addCase(productsAsyncActions.getFilterProduct.pending, (state) => {
    //     state.pending = true;
    //   })
    //   .addCase(productsAsyncActions.getFilterProduct.fulfilled, (state, action) => {
    //     state.pending = false;
    //     state.products = action.payload;
    //   })
    //   .addCase(productsAsyncActions.getCurrentProduct.pending, (state) => {
    //     state.pending = true;
    //   })
    //   .addCase(productsAsyncActions.getCurrentProduct.fulfilled, (state, action) => {
    //     state.pending = false;
    //     state.currentProduct = action.payload;
    //   });
  },
});

export default profileSlice;
