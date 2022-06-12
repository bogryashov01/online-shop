// Modules
import styled from 'styled-components';

// Components
import SneakersCarousel from '../../Components/carousel';

// Mock
import { cardArray } from '../../Constants/mockProductCard';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './home-screen.css';

function HomeScreen() {
  return (
    <>
      <SneakersCarousel />
      <Wrapper>
        <BlockTitle>Hot offer</BlockTitle>
        <CardBlock>
          {cardArray.map((cardItem) => {
            return (
              <Card key={cardItem.id}>
                <div>
                  <CardImage
                    src={
                      cardItem.productImg ||
                      'https://images.prom.ua/3325577832_originalnye-zhenskie-krossovki.jpg'
                    }
                    alt={cardItem.productName}
                  />
                </div>
                <CardDescription>
                  <p>{cardItem.productName}</p>
                  <p>{cardItem.productCategory}</p>
                  <p>{cardItem.productShortDescription}</p>
                  <p>{cardItem.productPrice}</p>
                </CardDescription>
              </Card>
            );
          })}
        </CardBlock>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-top: 125px;
`;
const BlockTitle = styled.h3`
  color: #000;
  font-size: 40px;
  line-height: 44px;
`;

const CardBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
`;

const CardImage = styled.img`
  max-width: 350px;
  margin: auto;
`;

const Card = styled.div`
  background-color: #fff;
  justify-self: center;
`;

const CardDescription = styled.div`
  padding-left: 20px;
  padding-top: 20px;
`;
export default HomeScreen;
