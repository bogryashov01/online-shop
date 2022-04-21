// Modules
import styled from 'styled-components';
import { FaUserAlt, FaShoppingBasket } from 'react-icons/fa';

function Header() {
  return (
    <HeaderBlock>
      <HeaderContent>
        <div>logo</div>
        <div>
          <FaShoppingBasket />
          <FaUserAlt />
        </div>
      </HeaderContent>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  background-color: #0073ff;
`;
const HeaderContent = styled.div`
  max-width: 1400px;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Header;
