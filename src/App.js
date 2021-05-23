import React, {useEffect} from 'react'
import Main from './components/Layout/Main/Main';
import Nav from './components/Layout/Nav/Nav';
import ProductsNav from './components/Shop/ProductsNav/ProductsNav'
import Products from './components/Shop/Products/Products'
import SideBar from './components/Layout/SideBar/SideBar';
import Cart from './components/Cart/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from './redux/reducers/products-reducer';
import { dummyProducts } from './dummy-data';

function App() {

	const dispatch = useDispatch();
	const isShowSideBar = useSelector(state => state.uiReducer.isShowSideBar);
	const searchItemFound = useSelector(state => state.productsReducer.searchItemFound);

	useEffect(() => {		
			

		if(!searchItemFound ){
			dispatch(productsActions.loadProducts(dummyProducts));
		}

		
	}, [searchItemFound]);

	

	return (
		<>
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
