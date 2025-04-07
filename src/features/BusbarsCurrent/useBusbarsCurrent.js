import { useMemo, useState } from "react";
import { getSortedUniqueValuesByProperty } from "shared/helpers";
import { getBusbarCurrentBySize } from "./utils/helpers";

const useBusbarsCurrent = (busbarsData) => {
  const thicknessList = useMemo(() => {
    return getSortedUniqueValuesByProperty("thickness", busbarsData);
  }, [busbarsData]);

  const widthList = useMemo(() => {
    return getSortedUniqueValuesByProperty("width", busbarsData);
  }, [busbarsData]);

  const [selectedThickness, setSelectedThickness] = useState(
    thicknessList[0] || null
  );
  const [selectedWidth, setSelectedWidth] = useState(widthList[0] || null);

  const current = useMemo(() => {
    return selectedThickness || selectedWidth
      ? getBusbarCurrentBySize(selectedWidth, selectedThickness, busbarsData)
      : null;
  }, [busbarsData, selectedThickness, selectedWidth]);

  const handleThickness = (value) => {
    if (value !== selectedThickness) setSelectedThickness(value);
  };

  const handleWidth = (value) => {
    if (value !== selectedWidth) setSelectedWidth(value);
  };

  return {
    thicknessList,
    widthList,
    selectedThickness,
    selectedWidth,
    current,
    handleThickness,
    handleWidth,
  };
};

export default useBusbarsCurrent;
