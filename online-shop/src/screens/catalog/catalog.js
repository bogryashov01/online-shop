// Modules
import styled from 'styled-components';

// Components
import NavBar from '../../Components/navbar';

function Catalog(props) {
  const { products } = props;

  return (
    <>
      <CatalogBlock>
        <NavBar />
        <ProductBlock>
          {products.map((product) => {
            return (
              <Card key={product.id}>
                <div>
                  <CardImage
                    src={
                      product.productImg ||
                      'https://images.prom.ua/3325577832_originalnye-zhenskie-krossovki.jpg'
                    }
                    alt={product.productName}
                  />
                </div>
                <CardDescription>
                  <p>{product.productName}</p>
                  <p>{product.productCategory}</p>
                  <p>{product.productShortDescription}</p>
                  <p>{product.productPrice}</p>
                </CardDescription>
              </Card>
            );
          })}
        </ProductBlock>
        ƒ
      </CatalogBlock>
    </>
  );
}

const CatalogBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 100px;
`;

const ProductBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  padding-top: 100px;
`;

const CardImage = styled.img`
  max-width: 350px;
  max-height: 350px;

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
export default Catalog;
