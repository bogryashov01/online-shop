// Modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// AsyncActions
import productsAsyncActions from '../../engine/products/async-actions';

// Selectors
import productSelectors from '../../engine/products/selectors';

// Components
import ProductItem from './product-item';

function ProductItemContainer() {
  const dispatch = useDispatch();
  const productId = useParams();
  const currentProduct = useSelector(productSelectors.currentProduct);
  const pending = useSelector(productSelectors.pending);

  useEffect(() => {
    dispatch(productsAsyncActions.getCurrentProduct(productId.id));
  }, [dispatch, productId.id]);

  return <ProductItem currentProduct={currentProduct} pending={pending} />;
}
export default ProductItemContainer;
