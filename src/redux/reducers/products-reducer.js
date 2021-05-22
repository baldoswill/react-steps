import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {products: []},
    reducers:{     
        loadProducts(state, action){     
                
            state.products = action.payload
        },
        searchProduct(state, action){          
            if(action.payload && state.products.length > 0){
              
                const searchQuery = new RegExp(action.payload, 'i')
                let productsResult =  state.products.filter(product => {                          
                    return product.title.search(searchQuery) > -1;
                });

                if(productsResult.length > 0){
                    state.products = productsResult;
                } 
            }           
        }
    }
});


export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
