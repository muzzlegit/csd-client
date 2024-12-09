import Layout from "../Layout/Layout";
import { Container, Item } from "./ItemsList.styled";
import useItemsList from "./useItemsList";

const ItemsList = () => {
  const { list, handleItemClick } = useItemsList();
  return (
    <Layout title="Обладнання">
      <Container>
        {list.map((item) => (
          <Item
            key={item.code}
            onClick={() => {
              handleItemClick(item);
            }}
          >
            <div>{item.code}</div>
            <div key={item.code}>{item.description}</div>
            <div>({item.manufacturer})</div>
          </Item>
        ))}
      </Container>
    </Layout>
  );
};

export default ItemsList;
