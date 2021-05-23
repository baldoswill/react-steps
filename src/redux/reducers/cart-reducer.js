import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {items: [], totalQuantity: 0, totalPrice: 0},
    reducers: {
        addItem(state, action){ 
            console.log(action.payload)                    ;
            state.items.push({
                title: action.payload.title,
                size: action.payload.size,
                color: action.payload.color,                   
                image: action.payload.image,                   
                price: action.payload.price,   
                id: action.payload.id                
            });                  
            state.totalQuantity++;
            state.totalPrice += action.payload.price;
        },
        removeItem(state, action){
            // TODO: Fix remove Item
            const existingItem = state.items.find(item => item.id === action.payload);
            if(existingItem){
                state.items = state.items.filter(item => item.id !== action.payload);
                state.totalQuantity--;
                state.totalPrice -= existingItem.price;
            }                           
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;