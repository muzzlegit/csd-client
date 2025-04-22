import {
  ActiveFilterFromScheme,
  FiltersFromScheme,
  Manufacturer,
  ProductsLine,
} from "features/Product-Choice/types/types";
import {
  Container,
  Logo,
  LogoBox,
  ManufacturerContainer,
  Series,
  SeriesContainer,
  SeriesTitle,
} from "./ManufacturersControls.styled";

export const ManufacturersControls = ({
  manufacturers,
  productKey,
  onManufacturerChange,
  activeFilter,
}: {
  manufacturers: Array<Manufacturer>;
  productKey: ProductsLine;
  activeFilter: ActiveFilterFromScheme;
  onManufacturerChange: <K extends keyof FiltersFromScheme>(
    property: K,
    value: FiltersFromScheme[K]["values"][number]
  ) => void;
}) => {
  return (
    <Container>
      {manufacturers.map((manufacturer) => {
        const { name, logo, products, description } = manufacturer;
        const series = products[productKey];
        if (!series) return null;
        return (
          <ManufacturerContainer key={name}>
            <LogoBox
              isActive={activeFilter?.manufacturer === name}
              onClick={() => {
                onManufacturerChange("manufacturer", name);
              }}
            >
              <Logo
                height="40px"
                src={logo.img}
                alt={name}
                title={description}
                logoColor={logo.color}
                isActive={true}
              />
            </LogoBox>

            <SeriesContainer>
              {series.map(({ series, description, logo }) => {
                return (
                  <Series
                    key={series}
                    isActive={activeFilter?.series === series}
                    title={description}
                    onClick={() => {
                      onManufacturerChange("series", series);
                    }}
                  >
                    <SeriesTitle>{`Серія ${series}`}</SeriesTitle>
                    <Logo height="40px" src={logo} alt={name} />
                  </Series>
                );
              })}
            </SeriesContainer>
          </ManufacturerContainer>
        );
      })}
    </Container>
  );
};
