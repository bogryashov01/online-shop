// Modules
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// AsyncActions
import productsAsyncActions from '../../engine/products/async-actions';

// Components
import Catalog from './catalog';

// Selectors
import productSelectors from '../../engine/products/selectors';

function CatalogContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector(productSelectors.allProducts);

  const pending = useSelector(productSelectors.pending);

  useEffect(() => {
    dispatch(productsAsyncActions.getAllProducts());
  }, [dispatch]);
  return <Catalog products={allProducts} pending={pending} navigate={navigate} />;
}

export default CatalogContainer;
