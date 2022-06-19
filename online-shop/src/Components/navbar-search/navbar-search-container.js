// Modules
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

// AsyncActions
import productsAsyncActions from '../../engine/products/async-actions';

// Components
import NavBarSearch from './navbar-search';

function NavbarSearchContainer() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onSearchButtonClickhandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(productsAsyncActions.getFilterProduct(value));
    },
    [dispatch, value],
  );
  return (
    <NavBarSearch
      onInputChange={onInputChange}
      onSearchButtonClickhandler={onSearchButtonClickhandler}
    />
  );
}
export default NavbarSearchContainer;
