import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { Turnabout } from "shared/ui";
import Layout from "../Layout/Layout";
import { Container } from "./ImagesContainer.styled";

const ImagesContainer = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);

  const images =
    queryItem?.mediaFiles?.map((image) => ({
      url: image?.url,
      alt: queryItem?.description ?? "Зображення пристрою",
    })) || [];

  return (
    <Layout title="Зображення">
      <Container>
        <Turnabout imagesList={images} imageSize="300"></Turnabout>
      </Container>
    </Layout>
  );
};

export default ImagesContainer;
