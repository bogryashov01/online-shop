// Modules
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

// Images
import SneakerImage from '../../Assets/banner-website-pattern-white-sneakers-minimalism-stylish-shoes-199406505.jpg';
import SneakerImage1 from '../../Assets/SELF_sneakers-lede.webp';
import SneakerImage2 from '../../Assets/unlaced_nike_grey_sneakers.png';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function SneakersCarousel() {
  return (
    <>
      <CarouselContainer>
        <Carousel>
          {/* {imageArray.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                <div>
                <img src={item.imagePath} alt="test" />
                </div>
                </Carousel.Item>
                );
              })} */}
          <Carousel.Item>
            <div>
              <Image src={SneakerImage} alt="test" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <Image src={SneakerImage1} alt="test" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <Image src={SneakerImage2} alt="test" />
            </div>
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
    </>
  );
}

const CarouselContainer = styled.div`
  height: 60vh;
`;

const Image = styled.img`
  height: 60vh;
  width: 100%;
`;

export default SneakersCarousel;
