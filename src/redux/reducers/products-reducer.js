import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {products: [], searchItemFound: false, sorted: false},
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
                    state.searchItemFound = true;
                    return;
                }else{
                    state.searchItemFound = false;
                }
            }else{
                state.searchItemFound = false;
            }        
        },
        sortProducts(state, action){
           
            if(action.payload === 'low-price'){
                state.products =  state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            }else if(action.payload === 'high-price'){
                
                state.products =  state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            
            }else if(action.payload === 'latest-shoes'){
                console.log(action.payload)
                state.products =  state.products.sort((a, b) => parseInt(a.dateCreated, 10) - parseInt(b.dateCreated, 10));
            }

            state.sorted = true;
        }
    }
});


export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
