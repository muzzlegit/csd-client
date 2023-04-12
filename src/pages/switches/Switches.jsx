import gif from "shared/assets/images/гіфка.gif";

//COMPONENTS
import {
  SearchBar,
  QueryItem,
  AccessoriesList,
  RelatedItems,
  FiltersBox,
  ItemsList,
} from "modules/switches";
import { useInput } from "modules/switches/hooks/useInput";

function Switches() {
  const { value, onChange } = useInput();

  return (
    <div className="h-full p-2 grid grid-cols-switches grid-rows-switches grid-areas-switches gap-4">
      <div className="grid-in-a p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <p className=" font-caveat text-2xl text-red-600">
          На даний момент доступні наступні серії:
        </p>
        <p className=" font-caveat text-2xl text-red-600">
          {" "}
          Telergon: S5, S5F, CCF, CEC, S5L
        </p>
        <p className=" font-caveat text-2xl text-red-600">
          {" "}
          Technoelectric: VCP
        </p>
      </div>
      <div className="grid-in-b p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <SearchBar value={value} onChange={onChange} />
      </div>
      <div className=" grid-in-c p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <FiltersBox />
      </div>
      <div className=" grid-in-d p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        4
      </div>
      <div className=" grid-in-e p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <QueryItem />
      </div>
      <div className=" grid-in-f p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <ItemsList onChange={onChange} />
      </div>
      <div className=" grid-in-g p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <RelatedItems onChange={onChange} />
      </div>
      <div className=" grid-in-h p-1 flex flex-col justify-start rounded-md bg-primary shadow-switches">
        <AccessoriesList />
      </div>
      <div className=" grid-in-i p-1 flex  justify-center rounded-md bg-primary shadow-switches">
        <img className="h-160" alt="Стьюи" src={gif} />
      </div>
    </div>
  );
}

export default Switches;
