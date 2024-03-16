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
  const hidePizzas = () => {
    if (internalValue == "  ") {
      setInternalValue("");
    } else {
      setInternalValue("  ");
    }
  };

  return (
    <>
      <input
        id="searchField"
        type="text"
        value={internalValue}
        placeholder={"Поиск товара..."}
        style={{
          border: "1px solid #f60",
          padding: "15px",
          borderRadius: "10px",
          width: "500px",
        }}
        onChange={(inputElement) => setInternalValue(inputElement.target.value)}
      />
      &nbsp;
      <button onClick={hidePizzas} style={{ paddingBottom: "12px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/118/118191.png"
          style={{
            width: "15px",
          }}
        alt={"Показать/Скрыть товары"}
        ></img>
      </button>
    </>
  );
};

export default SearchPizza;
