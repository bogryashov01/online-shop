// Modules
import styled from 'styled-components';

function SideBar(props) {
  const { categories } = props;
  return (
    <SideBarBlock>
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
    </SideBarBlock>
  );
}

const SideBarBlock = styled.div`
  background-color: #ffb200;
  height: 100%;
  padding-left: 20px;
`;
const BlockTitle = styled.h3`
  padding-top: 30px;
`;
const CategoryList = styled.ul`
  padding-inline-start: 0px;
  list-style: none;
`;
const CategoryListItem = styled.li``;
export default SideBar;
