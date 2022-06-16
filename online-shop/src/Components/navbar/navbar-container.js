import NavBar from './navbar';

// Mock
import { categories } from '../../Constants/mockCategories';

function NavBarContainer() {
  return <NavBar categories={categories} />;
}
export default NavBarContainer;
