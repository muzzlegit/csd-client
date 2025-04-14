import PropTypes from "prop-types";
import { Container, Title, Value, ValuesBox } from "./Filter.styled";

export const Filter = ({ filters, activeFilter, handleClick }) => {
  if (!filters) return null;

  return (
    <Container>
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
    </Container>
  );
};

Filter.propTypes = {
  filters: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      values: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ).isRequired,
    })
  ),
};
