import data from "../../data/accessories.json";

export const getAccessoryData = (article) => {
  return data.find(
    (accessory) =>
      accessory.article === article ||
      accessory.catalog_article === article ||
      accessory.article.includes(article, 5)
  );
};
