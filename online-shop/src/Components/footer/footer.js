// Modules
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBlock>
      <Wrapper>
        <FooterItem>logo</FooterItem>
        <FooterItem>Links</FooterItem>
        <FooterItem>Sponsors</FooterItem>
      </Wrapper>
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  background-color: #ffb200;
  height: 400px;
  margin-top: 100px;
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

export default Footer;
