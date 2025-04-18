import { fetchProductByArticle } from "lib/api/apiService";
import { useCallback, useState } from "react";
import { useSearchItemStore } from "./store";

export const useQuery = () => {
  const [query, setQuery] = useState("");

  const setItem = useSearchItemStore((state) => state.setItem);

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
      const product = await fetchProductByArticle(query);
      if (!product) return;
      setItem(product);
    },
    [setItem]
  );

  return {
    query,
    handleQuery,
    handleFetchProduct,
    handleFetchProductByArticle,
  };
};
