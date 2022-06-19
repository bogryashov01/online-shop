// Modules
import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

function ProductItem(props) {
  const { currentProduct, pending } = props;
  return (
    <>
      {pending ? (
        <LoaderBlock>
          <TailSpin height="100" width="100" color="#ffb200" ariaLabel="loading" />
        </LoaderBlock>
      ) : !currentProduct ? (
        <NoResultBlock>
          <div>
            <h3>No result about this item</h3>
          </div>
        </NoResultBlock>
      ) : (
        <ProductItemBlock>
          <ProductImage src={currentProduct.productImg} />
          <div>
            <p>Name: {currentProduct.productName}</p>
            <p>Description: {currentProduct.productDescription}</p>
            <h4>Price: {currentProduct.productPrice}</h4>
          </div>
        </ProductItemBlock>
      )}
    </>
  );
}

const LoaderBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 125px 20px;
`;
const ProductItemBlock = styled.div`
  max-width: 1200px;
  padding: 125px 20px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProductImage = styled.img`
  border: 4px solid #ffb200;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

const NoResultBlock = styled.div`
  max-width: 1200px;
  padding: 125px 20px;
  margin: auto;
  text-align: center;
`;

export default ProductItem;
