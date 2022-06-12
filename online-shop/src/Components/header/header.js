// Modules
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt, FaShoppingBasket } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBlock>
      <HeaderContent>
        <div>logo</div>
        <div>
          <FaShoppingBasket
            onClick={() => {
              navigate('/basket');
            }}
          />
          <FaUserAlt
            onClick={() => {
              navigate('/profile');
            }}
          />
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
