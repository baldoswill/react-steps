import React, {useEffect} from 'react'
import Main from './components/Layout/Main/Main';
import Nav from './components/Layout/Nav/Nav';
import ProductsNav from './components/Shop/ProductsNav/ProductsNav'
import Products from './components/Shop/Products/Products'
import SideBar from './components/Layout/SideBar/SideBar';
import Cart from './components/Cart/Cart/Cart';
import Notification from './components/Shared/Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from './redux/reducers/products-reducer';
import { uiActions } from './redux/reducers/ui-reducer';
import { dummyProducts } from './dummy-data';

function App() {

	const dispatch = useDispatch();
	const isShowSideBar = useSelector(state => state.uiReducer.isShowSideBar);
	const searchItemFound = useSelector(state => state.productsReducer.searchItemFound);
	const changedPage = useSelector(state => state.productsReducer.changedPage);
	const notificationTitle = useSelector(state => state.uiReducer.notificationTitle);
	const notificationMessage = useSelector(state => state.uiReducer.notificationMessage);
	const notificationType = useSelector(state => state.uiReducer.notificationType);
	const isShowNotification = useSelector(state => state.uiReducer.isShowNotification);
	
	useEffect(async() => {			
		if(!searchItemFound){
			dispatch(productsActions.loadProducts(dummyProducts));
		}
	}, [searchItemFound, changedPage]);
 

	return (
		<>
			{isShowNotification && <Notification title = {notificationTitle} message = {notificationMessage} type = {notificationType}/>}
			<SideBar showSideBar={isShowSideBar}>
				<Cart />
			</SideBar>
			<Nav />
			<Main>
				<ProductsNav />
				<Products />
				
			</Main>
		</>
	);
}

export default App;
