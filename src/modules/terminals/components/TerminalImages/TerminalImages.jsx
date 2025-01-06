import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { Turnabout } from "shared/ui";

export const TerminalImages = () => {
  const queryItem = useTerminalsStore((state) => state.queryItem);

  const images =
    queryItem?.mediaFiles?.map((image) => ({
      url: image?.url,
      alt: queryItem?.description ?? "Зображення пристрою",
    })) || [];

  return (
    <div>
      <Turnabout imagesList={images} imageSize="300"></Turnabout>
    </div>
  );
};
