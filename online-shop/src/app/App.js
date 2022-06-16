// Modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import HomeScreen from '../screens/home-screen';
import ProfileScreen from '../screens/profile-screen';
import Footer from '../Components/footer';
import Header from '../Components/header';

// Styles
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/basket" />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
