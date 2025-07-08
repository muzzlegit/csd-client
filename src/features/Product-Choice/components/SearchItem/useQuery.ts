import { useSearchItemStore } from "features/Product-Choice/store/store";
import { fetchProductByArticle } from "lib/api/apiService";
import { useCallback, useState } from "react";

export const useQuery = () => {
  const [query, setQuery] = useState("");

  const setItem = useSearchItemStore((state) => state.setItem);
  const setItemAccessory = useSearchItemStore(
    (state) => state.setItemAccessory
  );

  const handleQuery = useCallback((query: string) => {
    setQuery(query.trim());
  }, []);

  const handleFetchProduct = useCallback(async () => {
    if (!query || query?.length < 4) return;
    const product = await fetchProductByArticle(query);
    if (!product) return;
    setItem(product);
  }, [query, setItem]);

  const handleFetchProductByArticle = useCallback(
    async (article: string) => {
      if (!article || article?.length < 4) return;
      const product = await fetchProductByArticle(article);
      if (!product) return;
      setItem(product);
    },
    [setItem]
  );

  const handleFetchProductAccessoryByArticle = useCallback(
    async (article: string) => {
      if (!article) return;
      const accessory = await fetchProductByArticle(article);
      if (!accessory) return;
      setItemAccessory(accessory);
    },
    [setItem]
  );

  return {
    query,
    handleQuery,
    handleFetchProduct,
    handleFetchProductByArticle,
    handleFetchProductAccessoryByArticle,
  };
};
