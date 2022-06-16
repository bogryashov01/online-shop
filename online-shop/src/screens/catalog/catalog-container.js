// Components
import Catalog from './catalog';

// Mock
import { cardArray } from '../../Constants/mockProductCard';

function CatalogContainer() {
  return <Catalog products={cardArray} />;
}

export default CatalogContainer;
