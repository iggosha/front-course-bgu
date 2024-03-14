import React, { FC, useEffect, useState } from "react";

interface SearchPizzaProps {
  value: string;
  onChange: (value: string) => void;
  debounceTimeout: number;
}

const SearchPizza: FC<SearchPizzaProps> = ({
  value,
  onChange,
  debounceTimeout,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    const inputHandler = setTimeout(() => {
      onChange(internalValue);
    }, debounceTimeout);

    return () => {
      clearTimeout(inputHandler);
    };
  }, [internalValue, debounceTimeout, onChange]);

  return (
    <input
      type="text"
      value={internalValue}
      placeholder={"Введите название пиццы для поиска"}
      style={{
        marginBottom: "30px",
        border: "1px solid #f60",
        padding: "15px",
        borderRadius: "10px",
      }}
      onChange={(inputElement) => setInternalValue(inputElement.target.value)}
    />
  );
};

export default SearchPizza;
