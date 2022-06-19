// Modules
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

// Components
import NavBar from '../../Components/navbar';

function Catalog(props) {
  const { products, pending, navigate } = props;

  return (
    <>
      <CatalogBlock>
        <NavBar />
        {pending ? (
          <LoaderBlock>
            <TailSpin height="100" width="100" color="#ffb200" ariaLabel="loading" />
          </LoaderBlock>
        ) : products.length > 1 ? (
          <ProductBlock>
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  onClick={() => {
                    navigate(`/product-item/${product.id}`);
                  }}
                >
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
        ) : (
          <NoResultBlock>
            <div>
              <h3>No Result</h3>
              <p>Please make sure that you write the right name</p>
            </div>
          </NoResultBlock>
        )}
      </CatalogBlock>
    </>
  );
}

const LoaderBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 125px 20px;
`;

const NoResultBlock = styled.div`
  max-width: 1200px;
  padding: 125px 20px;
  margin: auto;
  text-align: center;
`;

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
