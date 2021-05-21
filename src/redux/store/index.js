import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart-reducer';
import productsReducer from '../reducers/products-reducer';
import uiReducer from '../reducers/ui-reducer';
 

const store = configureStore({
    reducer: {cartReducer, uiReducer, productsReducer},
  });

  export default store;