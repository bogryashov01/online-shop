// Modules
import styled from 'styled-components';

// Components
import NavbarSearch from '../navbar-search';

function NavBar(props) {
  const { categories } = props;
  return (
    <NavBarBlock>
      <BlockTitle>Sneakers Catalog</BlockTitle>
      <div>
        <CategoryList>
          {categories.map((category) => {
            return (
              <CategoryListItem key={category.category_id}>
                {category.category_name}
              </CategoryListItem>
            );
          })}
        </CategoryList>
      </div>
      <div>
        <NavbarSearch />
      </div>
    </NavBarBlock>
  );
}

const NavBarBlock = styled.div`
  background-color: #ffb200;
  height: 100%;
  padding-left: 20px;
`;
const BlockTitle = styled.h3`
  padding-top: 30px;
  text-align: center;
  padding-bottom: 30px;
`;
const CategoryList = styled.ul`
  padding-inline-start: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: auto;
`;
const CategoryListItem = styled.li`
  margin: 10px;
  &:hover {
    color: #1ecffb;
  }
`;
export default NavBar;
