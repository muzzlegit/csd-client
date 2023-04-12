//HOOKS
import useItemsList from "modules/switches/hooks/useItemsList";
//COMPONENTS
import Header from "shared/components/Header/Header";

const ItemsList = ({ onChange }) => {
  const { itemsList } = useItemsList();

  return (
    <div className="w-full text-center">
      <Header title={"Список обладнання"} />
      <ul className=" mt-1 flex flex-col gap-1 overflow-y-auto h-560 ">
        {itemsList.map(({ code, description, series, manufacturer }) => {
          return (
            <li
              key={code}
              onClick={() => {
                onChange(code);
              }}
              className="group w-full p-1 bg-primaryDark hover:cursor-pointer hover:text-pink rounded-md"
            >
              <span className="text-acent group-hover:text-pink">
                {series}{" "}
              </span>
              {description}
              <span className="text-acent group-hover:text-pink">
                {` (${manufacturer})`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
