import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import accessoriesData from "../../data/accessories.json";

export const useAccessoriesList = () => {
  const queryItem = useTerminalsStore((state) => state.queryItem);
  const setSelectedAccessory = useTerminalsStore(
    (state) => state.setSelectedAccessory
  );

  const articles = queryItem?.accessories || [];

  const accessories = articles.map((article) => {
    const item = accessoriesData.find(
      (accessory) => accessory?.article === article
    );
    if (!item)
      return { id: article, article, description: null, mediaFiles: [] };
    return { ...item, id: item?.article };
  });

  const handleAccessorySelect = (accessory) => {
    if (!accessory) return;
    setSelectedAccessory(accessory);
  };

  return { accessories, handleAccessorySelect };
};
