export type Manufacturer = {
  name: string;
  logo: {
    color: string;
    img: string;
  };
  description: string;
  products: Partial<Record<ProductsLine, Array<ManufacturerProductSeries>>>;
};

export type ManufacturerProductSeries = {
  series: string;
  logo: string;
  description: string;
  list: ProductListType;
};

export type ProductsLine = "switchDisconnectors" | "changeoverSwitches";

export type ProductUnit = {
  article: string;
  manufacturer: Manufacturer["name"];
  series: ManufacturerProductSeries["series"];
  description?: string;
  accessories?: Record<string, Array<string>>;
  voltageType?: string;
  connection?: string;
  size?: string;
  section?: string;
  image?: string | null;
  balance?: string | null;
  current?: string;
  pole?: string;
} & Record<string, unknown>;

export type ProductListType = Array<ProductUnit>;

export type FilterItem = {
  title: string;
  unit: string | null;
  values: Array<string | number>;
};

export type FilterScheme = {
  [K in keyof ProductUnit]?: FilterItem;
};

export type FiltersFromScheme = {
  [K in keyof FilterScheme]: {
    title: string;
    unit: string | null;
    values: Array<K extends keyof ProductUnit ? ProductUnit[K] : never>;
  };
};

export type ActiveFilterFromScheme = {
  [K in keyof FilterScheme]?: K extends keyof ProductUnit
    ? ProductUnit[K]
    : never;
};
