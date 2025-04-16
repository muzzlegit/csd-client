import { FeatureLayout } from "./components/Layouts/FeatureLayout/FeatureLayout";
import { SelectorsPanel } from "./components/Layouts/SelectorsPanel/SelectorsPanel";
import { SearchItem } from "./components/SearchItem";

export const ProductChoice = () => {
  return (
    <FeatureLayout>
      <SearchItem />
      <SelectorsPanel />
    </FeatureLayout>
  );
};
