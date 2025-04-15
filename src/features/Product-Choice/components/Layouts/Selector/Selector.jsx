import PropTypes from "prop-types";
import {
  Logo,
  LogoBox,
  ManufacturerBox,
  ManufacturersContainer,
  Series,
  SeriesContainer,
  SeriesTitle,
  Title,
  Value,
  ValuesBox,
  ValuesList,
} from "./Selector.styled";

/**
 * Компонент лейауту для селекторів
 * @param {{
 *  manufacturers: Array
 *  productKey: "switchDisconnectors"
 * }} props
 */

export const Selector = ({
  manufacturers,
  productKey,
  filters,
  activeFilter,
  handleClick,
}) => {
  if (!manufacturers || !productKey) return null;

  return (
    <div>
      <ManufacturersContainer>
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
      </ManufacturersContainer>
      <ValuesList>
        {Object.entries(filters).map(([property, filter]) => (
          <div key={filter.title}>
            <Title>
              {filter.title}
              {filter.unit ? `, ${filter.unit}` : ""}
            </Title>
            <ValuesBox>
              {filter.values.map((value) => (
                <Value
                  key={value}
                  isActive={value === activeFilter?.[property]}
                  onClick={() => {
                    handleClick(property, value);
                  }}
                >
                  {value}
                </Value>
              ))}
            </ValuesBox>
          </div>
        ))}
      </ValuesList>
    </div>
  );
};

Selector.propTypes = {
  manufacturers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.shape({
        color: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        products: PropTypes.shape(
          PropTypes.shape({
            series: PropTypes.string.isRequired,
            logo: PropTypes.string,
            description: PropTypes.string,
            list: PropTypes.arrayOf(PropTypes.shape),
          })
        ),
      }),
    })
  ).isRequired,
  productKey: PropTypes.oneOf(["switchDisconnectors"]).isRequired,
};
