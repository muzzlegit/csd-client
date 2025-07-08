import { useQuery } from "features/Product-Choice/components/SearchItem/useQuery";
import { AccesoriesListType } from "lib/api/createProductDTO";
import { CopyButton } from "shared/ui";
import { EmptyList } from "../EmptyList/EmptyList";
import { Accessory, Container, Property } from "./AccesoriesList.styled";

type AccesoriesListProps = {
  accesoriesList: AccesoriesListType;
};

export const AccesoriesList = ({ accesoriesList }: AccesoriesListProps) => {
  if (!accesoriesList) return null;
  if (!Object.keys(accesoriesList).length) return <EmptyList />;
  const { handleFetchProductAccessoryByArticle } = useQuery();

  return (
    <Container>
      {Object.entries(accesoriesList).map(([section, accessories]) => {
        return (
          <div key={section}>
            {accessories.map(({ name, article }) => {
              return (
                <Accessory key={article}>
                  <Property
                    onClick={() => {
                      handleFetchProductAccessoryByArticle(article);
                    }}
                  >
                    {name}
                  </Property>
                  <CopyButton
                    size="16"
                    value={article}
                    title="Скопіювати артикул"
                  />
                </Accessory>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};
