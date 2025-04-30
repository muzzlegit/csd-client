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
  if (!accesoriesList.length) return <EmptyList />;

  const { handleFetchProductAccessoryByArticle } = useQuery();

  return (
    <Container>
      {accesoriesList.map(({ article, description }) => {
        return (
          <Accessory key={article}>
            <Property
              onClick={() => {
                handleFetchProductAccessoryByArticle(article);
              }}
            >
              {description}
            </Property>
            <CopyButton size="16" value={article} title="Скопіювати артикул" />
          </Accessory>
        );
      })}
    </Container>
  );
};
