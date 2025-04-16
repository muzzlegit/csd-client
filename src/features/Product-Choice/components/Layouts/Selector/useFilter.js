import { useState } from "react";

export const useFilter = () => {
  const [activeFilter, setActiveFilter] = useState({});

  const handleFilterValueClick = (title, value) => {
    setActiveFilter((prev) => {
      const newValue = prev?.[title] === value ? null : value;
      return { ...prev, [title]: newValue };
    });
  };

  return { activeFilter, handleFilterValueClick };
};
