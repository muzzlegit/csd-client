import {
  FilterScheme,
  Manufacturer,
  ProductsLine,
} from "features/Product-Choice/types/types";
import { Container } from "./Selector.styled";
import { FilterControls } from "./atoms/FilterControls/FilterControls";
import { ManufacturersControls } from "./atoms/ManufacturersControls/ManufacturersControls";
import { ProductsList } from "./atoms/ProductsList/ProductsList";
import { useSelector } from "./useSelector";

// export const createFilterScheme = <Product extends object>() => {
//   return <Keys extends keyof Product>(scheme: {
//     [K in Keys]: {
//       title: string;
//       unit: string | null;
//       values: (string | number)[];
//     };
//   }) => scheme;
// };

export const Selector = ({
  manufacturers,
  filterScheme,
  productKey,
}: {
  manufacturers: Array<Manufacturer>;
  filterScheme: FilterScheme;
  productKey: ProductsLine;
}) => {
  const {
    filters,
    activeFilter,
    productsList,
    handleFetchProductByArticle,
    handleFilterSelectorClick,
  } = useSelector(manufacturers, filterScheme, productKey);

  return (
    <Container>
      <ManufacturersControls
        manufacturers={manufacturers}
        productKey={productKey}
        activeFilter={activeFilter}
        onManufacturerChange={handleFilterSelectorClick}
      />
      <FilterControls
        activeFilter={activeFilter}
        filters={filters}
        onFilterChange={handleFilterSelectorClick}
      />
      <ProductsList
        list={productsList}
        onItemClick={handleFetchProductByArticle}
      />
    </Container>
  );
};
