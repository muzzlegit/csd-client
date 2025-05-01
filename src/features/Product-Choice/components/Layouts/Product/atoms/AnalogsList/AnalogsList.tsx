import { AnalogsListType } from "lib/api/createProductDTO";
import { EmptyList } from "../EmptyList/EmptyList";

type AnalogsListProps = {
  analogsList: AnalogsListType;
};

export const AnalogsList = ({ analogsList }: AnalogsListProps) => {
  if (!analogsList) return null;
  if (!analogsList.length) return <EmptyList />;

  return <div></div>;
};
