import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {isShowSideBar: false, isShowNotification: false, notificationTitle: '', notificationMessage: '', notificationType: ''},
    reducers:{
        toggleSideBar(state){
            state.isShowSideBar = !state.isShowSideBar;
        },
        showNotification(state, action){
            state.notificationTitle = action.payload.notificationTitle;
            state.notificationMessage = action.payload.notificationMessage;
            state.notificationType = action.payload.notificationType;
            state.isShowNotification = action.payload.isShowNotification;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;