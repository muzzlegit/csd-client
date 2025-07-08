import { ProductUnit } from "features/Product-Choice/types/types";
import { productSchema, productSchemaShort } from "./productSchema";

type FileType = { file?: string; name?: string };
export type FilesListType = Record<string, Array<FileType>>;

export type MediafileType = { url: string; alt: string };

export type MediafilesListType = Array<MediafileType>;
export type AccesoriesListType = Record<
  string,
  Array<{
    remote_id: number;
    article: string;
    name: string;
  }>
>;
export type FeaturesListType = Array<{
  title: string;
  unit: string | null;
  value: string | null;
}>;

export type AnalogsListType = Array<any>;

export type ProductDTO = {
  remote_id: number;
  article: string;
  description: string;
  brand: string;
  balance: string | null;
  mediaFiles: MediafilesListType;
  files: FilesListType;
  features: FeaturesListType;
  accesories: AccesoriesListType;
  analogs: AnalogsListType;
};

export type ProductDTOShort = {
  article: string;
  remote_id: number;
  description: string;
  brand?: string;
  balance?: string | null;
  image?: string | null;
};

export const createProductDTO = (item: unknown): ProductDTO | null => {
  const parsed = productSchema.safeParse(item);
  if (!parsed.success) {
    console.error("Отримано невірну структуру продукта", parsed.error);
    return null;
  }
  const {
    product,
    mediaFiles = [],
    files = {},
    features = [],
    accesories = {},
    analogs = [],
  } = parsed.data;

  if (!product) return null;

  const formattedFiles: FilesListType = {};
  if (!Array.isArray(files)) {
    for (const key in files) {
      const sectionFiles = files[key];
      formattedFiles[key] = Object.values(sectionFiles).map(
        ({ file, name }) => ({
          file,
          name,
        })
      );
    }
  }

  const formattedAccessories: AccesoriesListType = {};
  if (!Array.isArray(accesories)) {
    for (const key in accesories) {
      const sectionAccessories = accesories[key];
      formattedAccessories[key] = Object.values(sectionAccessories).map(
        ({ remote_id, article, name }) => ({
          remote_id,
          article,
          name,
        })
      );
    }
  }

  return {
    remote_id: product?.remote_id,
    article: product?.article,
    description: product?.description,
    brand: product?.brand?.title,
    balance: product?.balance,
    mediaFiles: mediaFiles.map((item) => ({
      url: item.url,
      alt: product?.article,
    })),
    files: formattedFiles,
    features,
    accesories: formattedAccessories,
    analogs,
  };
};

export const createProductDTOShort = (item: unknown): ProductUnit | null => {
  const parsed = productSchemaShort.safeParse(item);
  if (!parsed.success) {
    console.error("Отримано невірну структуру продукта", parsed.error);
    return null;
  }

  const { article, remote_id, description, image, balance, brand } =
    parsed.data;

  return {
    article,
    series: "",
    remote_id,
    description,
    image,
    balance,
    manufacturer: brand.title,
  };
};
