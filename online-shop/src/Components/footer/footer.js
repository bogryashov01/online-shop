// Modules
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  const navigate = useNavigate();
  return (
    <FooterBlock>
      <Wrapper>
        <FooterItem>logo</FooterItem>
        <FooterItem>
          <FooterList>
            <FooterListItem
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </FooterListItem>
            <FooterListItem
              onClick={() => {
                navigate('/catalog');
              }}
            >
              Catalog
            </FooterListItem>
            <FooterListItem
              onClick={() => {
                navigate('/profile');
              }}
            >
              Profile
            </FooterListItem>
            <FooterListItem
              onClick={() => {
                navigate('/basket');
              }}
            >
              Basket
            </FooterListItem>
          </FooterList>
        </FooterItem>
        <FooterItem>Sponsors</FooterItem>
      </Wrapper>
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  background-color: #ffb200;
  height: 300px;
`;
const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-top: 125px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const FooterItem = styled.div`
  justify-self: center;
`;

const FooterList = styled.ul`
  list-style: none;
`;
const FooterListItem = styled.li`
  color: #000;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: #1ecffb;
  }
`;
export default Footer;
