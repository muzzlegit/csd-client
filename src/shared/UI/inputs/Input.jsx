const Input = ({ value, onChange }) => {
  return (
    <input
      className="h-5 rounded-sm focus:outline-none text-blue-950 p-2 text-center"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="...введіть артикул"
      value={value}
      onChange={(e) => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};

export default Input;
