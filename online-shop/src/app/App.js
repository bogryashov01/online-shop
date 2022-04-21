// Modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import HomeScreen from '../screens/home-screen/home-screen';

// Styles
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="expenses" />
          <Route path="invoices" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
