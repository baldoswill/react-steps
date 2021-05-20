import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {items: [], totalQuantity: 0},
    reducers: {
        addItem(state, action){             
            state.items.push({
                title: action.payload.title,
                size: action.payload.size,
                color: action.payload.color,                   
            });                  
            state.totalQuantity++;
        },
        removeItem(state, action){
            const isExists = state.items.some(item => item.id === action.payload.id);
            if(isExists){
                state.items = state.items.filter(item => item.id !== action.payload.id);
                state.totalQuantity--;
            }                           
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;