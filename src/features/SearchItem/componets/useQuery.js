import { fetchItemByArticle } from "lib/apiService";
import { useCallback, useState } from "react";
import { useSearchItemStore } from "../store";

const createItemDTO = (item) => {
  if (!item) return null;
  const {
    product,
    mediaFiles = [],
    files = {},
    features = [],
    accesories = [],
    analogs = [],
  } = item;
  if (!product) return null;
  const formattedFiles = {};

  for (const key in files) {
    formattedFiles[key] = Object.values(files[key]).map(({ file, name }) => ({
      file,
      name,
    }));
  }

  return {
    article: product?.article,
    description: product?.description,
    brand: product?.brand?.title,
    mediaFiles: mediaFiles.map((item) => ({
      url: item.url,
      alt: product?.article,
    })),
    files: formattedFiles,
    features,
    accesories: accesories.map(({ remote_id, article, description }) => ({
      remote_id,
      article,
      description,
    })),
  };
};

export const useQuery = () => {
  const [query, setQuery] = useState("");

  const setItem = useSearchItemStore((state) => state.setItem);

  const handleQuery = useCallback((query) => {
    setQuery(query.trim());
  }, []);

  const handleFetchItem = useCallback(async () => {
    if (!query || query?.length < 4) return;
    const item = await fetchItemByArticle(query);

    setItem(createItemDTO(item));
  }, [query, setItem]);

  return { query, handleQuery, handleFetchItem };
};
