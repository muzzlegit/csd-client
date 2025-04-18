import { productSchema, productSchemaShort } from "./productSchema";

type FileType = { file: string; name: string };
type MediafileType = { url: string; alt: string };

export type ProductDTO = {
  remote_id: number;
  article: string;
  description: string;
  brand: string;
  balance: string | null;
  mediaFiles: Array<MediafileType>;
  files: Record<string, Array<FileType>>;
  features: Array<{
    title: string;
    unit: string | null;
    value: string | null;
  }>;
  accesories: Array<{
    remote_id: number;
    article: string;
    description: string;
  }>;
  analogs: Array<any>;
};

export type ProductDTOShort = {
  article: string;
  remote_id: number;
  description: string;
  brand: string;
  balance: string | null;
  image: string | null;
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
    accesories = [],
    analogs = [],
  } = parsed.data;

  if (!product) return null;

  const formattedFiles: Record<string, Array<FileType>> = {};

  for (const key in files) {
    const sectionKey = key as string;
    const sectionFiles = files[sectionKey];
    formattedFiles[sectionKey] = Object.values(sectionFiles).map(
      ({ file, name }) => ({
        file,
        name,
      })
    );
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
    accesories: accesories.map(({ remote_id, article, description }) => ({
      remote_id,
      article,
      description,
    })),
    analogs,
  };
};

export const createProductDTOShort = (
  item: unknown
): ProductDTOShort | null => {
  const parsed = productSchemaShort.safeParse(item);
  if (!parsed.success) {
    console.error("Отримано невірну структуру продукта", parsed.error);
    return null;
  }

  const { article, remote_id, description, image, balance, brand } =
    parsed.data;

  return {
    article,
    remote_id,
    description,
    image,
    balance,
    brand: brand.title,
  };
};
