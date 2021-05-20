import Main from './components/Layout/Main/Main';
import Nav from './components/Layout/Nav/Nav';
import ProductsNav from './components/Shop/ProductsNav/ProductsNav'
import Products from './components/Shop/Products/Products'
import SideBar from './components/Layout/SideBar/SideBar';
import CartItem from './components/Cart/CartItem/CartItem';


function App() {
  return (
    <>
      <SideBar>
         
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
