import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {isShowSideBar: false},
    reducers:{
        toggleSideBar(state){
            console.log('turn it off');
            state.isShowSideBar = !state.isShowSideBar;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;