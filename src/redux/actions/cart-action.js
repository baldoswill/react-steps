import axios from 'axios';
import { cartActions } from '../reducers/cart-reducer';
import { uiActions } from '../reducers/ui-reducer';

export const getItemsFromCart = () =>{
    return async (dispatch) => {
        try{
            const resp = await axios.get("https://react-steps-default-rtdb.firebaseio.com/cart.json");            
            dispatch(cartActions.fillCart(Object.values(resp.data)));
        }catch(e){
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
            const resp = await axios.delete("https://react-steps-default-rtdb.firebaseio.com/cart.json?equalTo=309bb3cc-44cb-4b92-927a-4b3527911efe");
        } catch (error) {
            
        }
    }
}
