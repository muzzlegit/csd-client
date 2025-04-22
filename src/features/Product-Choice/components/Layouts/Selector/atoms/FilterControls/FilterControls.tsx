import {
  ActiveFilterFromScheme,
  FiltersFromScheme,
} from "features/Product-Choice/types/types";
import {
  Control,
  ControlsList,
  Group,
  GroupTitle,
  List,
} from "./FilterControls.styled";

export const FilterControls = ({
  filters,
  activeFilter,
  onFilterChange,
}: {
  filters: FiltersFromScheme;
  activeFilter: ActiveFilterFromScheme;
  onFilterChange: <K extends keyof FiltersFromScheme>(
    property: K,
    value: FiltersFromScheme[K]["values"][number]
  ) => void;
}) => {
  const entries = Object.entries(filters) as [
    keyof FiltersFromScheme,
    FiltersFromScheme[keyof FiltersFromScheme]
  ][];

  return (
    <List>
      {entries.map(([property, filter]) => {
        if (!filter) return null;
        return (
          <Group key={filter.title}>
            <GroupTitle>
              {`${filter.title}${filter.unit ? `, ${filter.unit}` : ""}`}
            </GroupTitle>
            <ControlsList>
              {filter.values.map((value) => {
                if (!value) return null;
                return (
                  <Control
                    key={value.toString()}
                    isActive={value === activeFilter?.[property]}
                    onClick={() => {
                      onFilterChange(property, value);
                    }}
                  >
                    {value}
                  </Control>
                );
              })}
            </ControlsList>
          </Group>
        );
      })}
    </List>
  );
};
