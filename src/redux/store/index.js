import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart-reducer';
import uiReducer from '../reducers/ui-reducer';
 

const store = configureStore({
    reducer: {cartReducer, uiReducer},
  });

  export default store;