import {
  FilterSchemeGeneric,
  FiltersFromScheme,
} from "features/Product-Choice/types/types";
import {
  Control,
  ControlsList,
  Group,
  GroupTitle,
  List,
} from "./FilterControls.styled";

type FilterControlsProps<Scheme extends FilterSchemeGeneric> = {
  filters: Scheme;
  activeFilter: FiltersFromScheme<Scheme>;
  onFilterChange: (
    property: keyof Scheme,
    value: Scheme[keyof Scheme]["values"][number]
  ) => void;
};

export const FilterControls = <Scheme extends FilterSchemeGeneric>({
  filters,
  activeFilter,
  onFilterChange,
}: FilterControlsProps<Scheme>) => {
  return (
    <List>
      {(Object.entries(filters) as [keyof Scheme, Scheme[keyof Scheme]][]).map(
        ([property, filter]) => (
          <Group key={filter.title}>
            <GroupTitle>
              {`${filter.title}${filter.unit ? `, ${filter.unit}` : ""}`}
            </GroupTitle>
            <ControlsList>
              {filter.values.map((value) => (
                <Control
                  key={value}
                  isActive={value === activeFilter?.[property]}
                  onClick={() => {
                    onFilterChange(property, value);
                  }}
                >
                  {value}
                </Control>
              ))}
            </ControlsList>
          </Group>
        )
      )}
    </List>
  );
};
