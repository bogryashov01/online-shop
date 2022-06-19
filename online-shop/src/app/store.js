// Modules
import { configureStore } from '@reduxjs/toolkit';

// Engine
import productReducer from '../engine/products';
import profileReducer from '../engine/profile';

const store = configureStore({
  reducer: {
    products: productReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
