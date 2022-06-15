import SideBar from './sidebar';

// Mock
import { categories } from '../../Constants/mockCategories';

function SideBarContainer() {
  return <SideBar categories={categories} />;
}
export default SideBarContainer;
