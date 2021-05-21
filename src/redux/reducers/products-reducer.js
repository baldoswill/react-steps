import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {products: []},
    reducers:{     
        loadProducts(state, action){           
            state.products = action.payload.products
        },
        searchProduct(state, action){
            const searchQuery = new RegExp(action.payload, 'i')
            state.items =  state.items.filter(item => {            
                return item.task.search(searchQuery) > -1;
            });
        }
    }
});


export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
