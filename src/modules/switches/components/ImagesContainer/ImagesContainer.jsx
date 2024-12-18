import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { GiGooeyMolecule } from "react-icons/gi";
import { Turnabout } from "shared/ui";
import useTurnabout from "shared/ui/components/Turnabout/useTurnabout";
import Layout from "../Layout/Layout";
import { Container, Img, Placeholder } from "./ImagesContainer.styled";
const ImagesContainer = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);
  const { index, handleNextClick, handlePrevClick } = useTurnabout(
    queryItem?.mediaFiles?.length ?? 0
  );
  const isImages =
    queryItem?.mediaFiles &&
    queryItem?.mediaFiles?.length &&
    queryItem.mediaFiles[index];

  return (
    <Layout title="Зображення">
      {isImages ? (
        <Turnabout
          count={queryItem?.mediaFiles?.length}
          index={index}
          onNext={handleNextClick}
          onPrev={handlePrevClick}
        >
          <Container>
            <Img
              src={queryItem.mediaFiles[index].url}
              alt={queryItem.description}
            />
          </Container>
        </Turnabout>
      ) : (
        <Placeholder>
          <GiGooeyMolecule size="280" />
        </Placeholder>
      )}
    </Layout>
  );
};

export default ImagesContainer;
