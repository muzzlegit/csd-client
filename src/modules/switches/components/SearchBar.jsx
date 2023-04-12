import React, { useState } from "react";
//COMPONENTS
import Input from "shared/UI/inputs/Input";
import Header from "shared/components/Header/Header";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full text-center">
      <Header title={"Пошук по артиклу"} />
      <div className="mt-1">
        <label className="mr-2">Артикул</label>
        <Input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchBar;
