import {
  FilterSchemeGeneric,
  Manufacturer,
  ProductsLine,
} from "features/Product-Choice/types/types";
import { Container } from "./Selector.styled";
import { FilterControls } from "./atoms/FilterControls/FilterControls";
import { ProductsList } from "./atoms/ProductsList/ProductsList";
import { useSelector } from "./useSelector";

export const Selector = ({
  manufacturers,
  filterScheme,
  productKey,
}: {
  manufacturers: Array<Manufacturer>;
  filterScheme: FilterSchemeGeneric;
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
      {/* <ManufacturersContainer>
        {manufacturers.map(({ description, name, logo, products }) => {
          return (
            <ManufacturerBox key={name}>
              <LogoBox isActive={name === activeFilter?.manufacturer}>
                <Logo
                  title={description}
                  src={logo.img}
                  alt={name}
                  height="40px"
                  logoColor={logo.color}
                  onClick={() => {
                    handleClick("manufacturer", name);
                  }}
                />
              </LogoBox>
              <SeriesContainer>
                {products[productKey].map((product) => (
                  <Series
                    key={product.series}
                    isActive={product.series === activeFilter?.series}
                  >
                    <SeriesTitle>Серія {product.series}</SeriesTitle>
                    <Logo
                      title={product.description}
                      src={product.logo}
                      alt={product.series}
                      height="80px"
                      onClick={() => {
                        handleClick("series", product.series);
                      }}
                    />
                  </Series>
                ))}
              </SeriesContainer>
            </ManufacturerBox>
          );
        })}
      </ManufacturersContainer> */}
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
