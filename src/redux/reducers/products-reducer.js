import {createSlice} from '@reduxjs/toolkit';


const paginator = (items, page, per_page) => {
 
    var page = page || 1,
    per_page = per_page || 10,
    offset = (page - 1) * per_page,
   
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
    return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: (total_pages > page) ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
    };
  }

const productsSlice = createSlice({
    name: 'products',
    initialState: {products: [], searchItemFound: false, sorted: false, currentPage: 1, perPage: 2, totalPages: 1, changedPage: 0},
    reducers:{     
        loadProducts(state, action){     
            const paging = paginator(action.payload, state.currentPage, state.perPage);
            state.products = paging.data;
            state.currentPage = paging.page;
            state.perPage = paging.per_page;
            state.totalPages = paging.total_pages;
        },
        searchProduct(state, action){          
            if(action.payload && state.products.length > 0){ 
                state.searchCounter++;
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
        },
        paginator(state, action){            
            const paging = paginator(state.products, action.payload, state.perPage);
            state.products = paging.data;
            state.currentPage = paging.page;
            state.changedPage++;
            state.searchItemFound = false;
        }
        
    }
});


export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
