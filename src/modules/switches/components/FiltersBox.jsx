//COMPONENTS
import useFilters from "modules/switches/hooks/useFilters";
import Header from "shared/components/Header/Header";
import Select from "shared/UI/select/Select";

const FiltersBox = () => {
  const { filtersOptions, onFilterChange } = useFilters();
  console.log("🚀 ~ filtersOptions:", filtersOptions);

  return filtersOptions ? (
    <div>
      <Header title={"Фільтри"} />
      <div className="mt-1 flex justify-center gap-3">
        <Select
          title="Виробник"
          id="manufacturer"
          options={filtersOptions.manufacturer}
          onFilterChange={onFilterChange}
        />
        <Select
          title="Тип обладнання"
          id="section"
          options={filtersOptions.section}
          onFilterChange={onFilterChange}
        />
      </div>
      <div className="mt-2 flex justify-center gap-3">
        <Select
          title="Серія"
          id="series"
          options={filtersOptions.series}
          onFilterChange={onFilterChange}
        />
        <Select
          title="Струм"
          id="current"
          options={filtersOptions.current}
          onFilterChange={onFilterChange}
        />
        <Select
          title="Кількість полюсів"
          id="pole"
          options={filtersOptions.pole}
          onFilterChange={onFilterChange}
        />
      </div>
    </div>
  ) : null;
};

export default FiltersBox;
