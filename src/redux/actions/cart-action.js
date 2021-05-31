import axios from 'axios';
import { cartActions } from '../reducers/cart-reducer';
import { uiActions } from '../reducers/ui-reducer';

export const getItemsFromCart = () =>{
    return async (dispatch) => {
        try{

        }catch(e){
            
        }
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


