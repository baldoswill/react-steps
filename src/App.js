import Main from './components/Layout/Main/Main';
import Nav from './components/Layout/Nav/Nav';
import ProductsNav from './components/Shop/ProductsNav/ProductsNav'
import Products from './components/Shop/Products/Products'
import SideBar from './components/Layout/SideBar/SideBar';
import Cart from './components/Cart/Cart/Cart';
import {useSelector} from 'react-redux';


function App() {

	const isShowSideBar = useSelector(state => state.uiReducer.isShowSideBar);

	return (
		<>
		<SideBar showSideBar = {isShowSideBar}>
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
