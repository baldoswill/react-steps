import axios from 'axios';
import React, {useState} from 'react';
import { cartActions } from '../reducers/cart-reducer';
import { uiActions } from '../reducers/ui-reducer';

export const getItemsFromCart = (pageNumber) =>{
    return async (dispatch) => {
 
        try{
            // const resp = await axios.get("https://react-steps-default-rtdb.firebaseio.com/cart.json");   
            dispatch(cartActions.setLoading(true));
            let cancel;   
            const resp = axios({
                method: 'GET',
                url: "https://react-steps-default-rtdb.firebaseio.com/cart.json",
                params: {page: pageNumber},
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            const ids = Object.keys(resp.data);
            const items = Object.values(resp.data);

            for (let index = 0; index < items.length; index++) {
                items[index].id = ids[index];                
            }
            dispatch(cartActions.fillCart(items));
            dispatch(cartActions.setHasMore(items.length > 0));
            dispatch(cartActions.setLoading(false));
        }catch(e){
            dispatch(uiActions.showNotification({
                notificationTitle: 'Error',
                notificationMessage: 'Something went wrong',
                notificationType: 'error',
                isShowNotification: true
            }));
            if(axios.isCancel(e)) return;      
            dispatch(cartActions.setError(true));
        }

        setTimeout(() => {
            dispatch(uiActions.showNotification({
                notificationTitle: '',
                notificationMessage: '',
                notificationType: '',
                isShowNotification: false
            }));
        }, 4000);

        
    }
}

export const addItemToCart = (item) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.showNotification({
                notificationTitle: 'Loading',
                notificationMessage: 'Saving item to cart...',
                notificationType: 'loading',
                isShowNotification: true
            }));

            const resp = await axios.post("https://react-steps-default-rtdb.firebaseio.com/cart.json", item);
 
            if (resp.status === 200) {
                dispatch(uiActions.showNotification({
                    notificationTitle: 'Success',
                    notificationMessage: 'Successfully added item',
                    notificationType: 'success',
                    isShowNotification: true
                }));
                item.id = resp.data.name;
                dispatch(cartActions.addItem(item));        
            }
        } catch (e) {
            dispatch(uiActions.showNotification({
                notificationTitle: 'Error',
                notificationMessage: 'Something went wrong',
                notificationType: 'error',
                isShowNotification: true
            }));
        }

        setTimeout(() => {
            dispatch(uiActions.showNotification({
                notificationTitle: '',
                notificationMessage: '',
                notificationType: '',
                isShowNotification: false
            }));
        }, 4000);
    }
}

export const removeItem = (id) => {
    return async(dispatch) => {
        try {
   
            const resp = await axios.delete(`https://react-steps-default-rtdb.firebaseio.com/cart/${id}.json`);
            dispatch(cartActions.removeItem(id));
        } catch (error) {
            
        }
    }
}
