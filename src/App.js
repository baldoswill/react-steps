import React, {useEffect} from 'react'
import Main from './components/Layout/Main/Main';
import Nav from './components/Layout/Nav/Nav';
import ProductsNav from './components/Shop/ProductsNav/ProductsNav'
import Products from './components/Shop/Products/Products'
import SideBar from './components/Layout/SideBar/SideBar';
import Cart from './components/Cart/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from './redux/reducers/products-reducer';

const dummyProducts = [{
	id: 1,
	images: {
		'#20426B': 'shoe2-20426B.png',
		'#BEE441': 'shoe2-BEE441.png',
		'#FC4142': 'shoe2-FC4142.png'
	},
	title: 'Gieswin',
	sizes: [7, 8, 9, 10],
	colors: ['#20426B', '#BEE441', '#FC4142'],
	price: 21.23,

},
{
	id: 2,
	images: {
		'#0E0E0E': 'shoe1-0E0E0E.png',
		'#5E2337': 'shoe1-5E2337.png',
		'#64CBB6': 'shoe1-64CBB6.png',
		'#C9BF2F': 'shoe1-C9BF2F.png'
	},
	title: 'Meeflo',
	sizes: [7, 8, 9, 10],
	colors: ['#0E0E0E', '#5E2337', '#64CBB6', '#C9BF2F'],
	price: 17.23,

}]


function App() {

	const isShowSideBar = useSelector(state => state.uiReducer.isShowSideBar);

	const dispatch = useDispatch();

	dispatch(productsActions.loadProducts(dummyProducts));

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
