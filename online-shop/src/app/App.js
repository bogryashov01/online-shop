// Modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../Components/footer';
import Header from '../Components/header';

// Components
import HomeScreen from '../screens/home-screen/home-screen';

// Styles
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="/basket" />
          <Route path="/profile" />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
