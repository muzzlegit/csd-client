import { Layout } from "./components/Layout/Layout";
import { SearchItem } from "./components/SearchItem";
import { SelectorsPanel } from "./components/SelectorsPanel/SelectorsPanel";

export const ProductChoice = () => {
  return (
    <Layout>
      <SearchItem />
      <SelectorsPanel />
    </Layout>
  );
};
