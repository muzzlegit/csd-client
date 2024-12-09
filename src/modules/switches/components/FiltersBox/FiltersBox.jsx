import { Select } from "shared/ui";
import Layout from "../Layout/Layout";
import { Container, Wrap } from "./FiltersBox.styled";
import useFiltersBox from "./useFiltersBox";

const FiltersBox = () => {
  const { filters, filtersOptions, handleFilters } = useFiltersBox();
  return (
    <Layout title="Фільтри">
      <Container>
        <Wrap>
          <Select
            id="section"
            label="Тип"
            value={filters?.section}
            options={filtersOptions?.section}
            onChange={handleFilters}
            width="180px"
          />
          <Select
            id="manufacturer"
            label="Виробник"
            value={filters?.manufacturer}
            options={filtersOptions?.manufacturer}
            onChange={handleFilters}
            width="100px"
          />
        </Wrap>
        <Wrap>
          <Select
            id="series"
            label="Серія"
            value={filters?.series}
            options={filtersOptions?.series}
            onChange={handleFilters}
            width="60px"
          />
          <Select
            id="current"
            label="Струм"
            value={filters?.current}
            options={filtersOptions?.current}
            onChange={handleFilters}
            width="60px"
          />
          <Select
            id="pole"
            label="Кількість полюсів"
            value={filters?.pole}
            options={filtersOptions?.pole}
            onChange={handleFilters}
            width="60px"
          />
        </Wrap>
      </Container>
    </Layout>
  );
};

export default FiltersBox;
