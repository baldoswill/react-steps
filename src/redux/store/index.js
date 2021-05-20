import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart-reducer';
 

const store = configureStore({
    reducer: {cartReducer: cartReducer},
  });

  export default store;