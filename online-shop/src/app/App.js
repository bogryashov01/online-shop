// Modules
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import HomeScreen from '../screens/home-screen';
import ProfileScreen from '../screens/profile-screen';
import Catalog from '../screens/catalog';
import Footer from '../Components/footer';
import Header from '../Components/header';
import ProductItem from '../screens/product-item-screen';

// Store
import store from './store';

// Styles
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/basket" />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product-item/:id" element={<ProductItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
