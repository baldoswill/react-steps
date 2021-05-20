import Main from './components/Layout/Main/Main';
import ProductsNav from './components/Shop/ProductsNav/ProductsNav'
import Products from './components/Shop/Products/Products'

function App() {
  return (
    <>
      <Main>
        <ProductsNav />
        <Products />
      </Main>
    </>
  );
}

export default App;
