// Modules
import HomeScreen from './home-screen';

// Components
import { useNavigate } from 'react-router-dom';

function HomeScreenContainer() {
  const navigate = useNavigate();
  return <HomeScreen navigate={navigate} />;
}
export default HomeScreenContainer;
