// Modules
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './home-screen.css';

function HomeScreen() {
  return (
    <CarouselContainer>
      <Carousel>
        <Carousel.Item>
          <div>olo</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>olo</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>olo</div>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  height: 100vh;
`;
export default HomeScreen;
