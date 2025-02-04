import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { Turnabout } from "shared/ui";
import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { Container } from "./AccessoryImage.styled";

export const AccessoryImage = () => {
  const selectedAccessory = useTerminalsStore(
    (state) => state.selectedAccessory
  );

  const images =
    selectedAccessory?.mediaFiles?.map((image) => ({
      url: image?.url,
      alt: selectedAccessory?.description ?? "Зображення пристрою",
    })) || [];

  return (
    <CellLayout>
      <Container>
        <Turnabout imagesList={images} imageSize="260"></Turnabout>
      </Container>
    </CellLayout>
  );
};
