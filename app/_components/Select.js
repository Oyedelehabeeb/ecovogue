function Select({ options, value, onChange }) {
  return (
    <select
      className="px-4 py-2 border rounded-md bg-gray-100"
      value={value}
      onChange={onChange}
    >
      {options?.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
