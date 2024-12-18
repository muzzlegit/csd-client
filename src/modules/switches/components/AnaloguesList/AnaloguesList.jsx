import Layout from "../Layout/Layout";
import { Acent, Container, Item } from "./AnaloguesList.styled";
import useAnaloguesList from "./useAnaloguesList";

const AnaloguesList = () => {
  const { analogues, handleItemClick } = useAnaloguesList();
  if (!analogues) return null;
  return (
    <Layout title="Можливі заміни">
      <Container>
        {analogues.map((item) => (
          <Item
            key={item.code}
            onClick={() => {
              handleItemClick(item);
            }}
          >
            <Acent>{item.code}</Acent>
            <div key={item.code}>{item.description}</div>
            <Acent>({item.manufacturer})</Acent>
          </Item>
        ))}
      </Container>
    </Layout>
  );
};

export default AnaloguesList;
