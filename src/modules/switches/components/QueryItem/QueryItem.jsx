import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { CopyButton } from "shared/ui";
import Layout from "../Layout/Layout";
import { Container, Label, Wrap } from "./QueryItem.styled";

const QueryItem = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);

  const fields = [
    { label: "Опис:", value: queryItem?.description },
    { label: "Артикул:", value: queryItem?.code },
    { label: "Серія:", value: queryItem?.series },
    { label: "Кількість полюсів:", value: queryItem?.pole },
    { label: "Розмір:", value: queryItem?.size },
    { label: "Виробник:", value: queryItem?.manufacturer },
  ];

  return (
    <Layout title="Технічні дані">
      <Container>
        {queryItem ? (
          <>
            {fields.map((field, index) => (
              <Wrap key={index}>
                <Label>{field.label}</Label>
                <p>{field.value}</p>
                {field.label === "Артикул:" ? (
                  <CopyButton size="12" value={field.value} />
                ) : null}
              </Wrap>
            ))}
          </>
        ) : null}
      </Container>
    </Layout>
  );
};

export default QueryItem;
