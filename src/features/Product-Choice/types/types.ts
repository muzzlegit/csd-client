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

export type BaseProduct = {
  article: string;
  manufacturer: Manufacturer["name"];
  series: ManufacturerProductSeries["series"];
  description: string;
  accessories: Array<string>;
  voltageType?: string;
  connection?: string;
  size?: string;
  section?: string;
};

type OptionalProductFields = {
  image?: string;
  balanse?: string;
};

export type SwitchDisconnectorType = BaseProduct &
  OptionalProductFields & {
    current: string;
    pole: string;
    accessories: Array<string>;
  };

export type ChangeoverSwitchesType = BaseProduct &
  OptionalProductFields & {
    current: string;
    pole: string;
    accessories: Array<string>;
  };

export type ProductUnit = SwitchDisconnectorType | ChangeoverSwitchesType;

export type ProductListType = Array<ProductUnit>;

export type FilterSchemeGeneric = Partial<
  Record<
    keyof ProductUnit,
    { title: string; unit: string | null; values: Array<string | number> }
  >
>;

export type FiltersFromScheme<Scheme extends FilterSchemeGeneric> = {
  [K in keyof Scheme]?: Scheme[K] extends { values: Array<infer V> }
    ? V
    : never;
};
