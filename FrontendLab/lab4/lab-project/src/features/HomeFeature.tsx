import React, { FC, useEffect, useState } from "react";
import AddPizzaForm from "../components/AddPizzaForm";
import DisplayPizzas from "../components/DisplayPizzas";
import SearchPizza from "../components/SearchPizza";
import Pizza from "../models/Pizza";

const HomeFeature: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const addPizza = (newPizza: Pizza) => {
    const newPizzasList = [...pizzasList, newPizza];

    setPizzasList(newPizzasList);
    localStorage.setItem("pizzasState", JSON.stringify(newPizzasList));
  };
  const updatePizza = (newPizza: Pizza) => {
    const newPizzasList = pizzasList.map((pizza) =>
      pizza.id === newPizza.id ? newPizza : pizza
    );
    setPizzasList(newPizzasList);
    localStorage.setItem("pizzasState", JSON.stringify(newPizzasList));
  };
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
    localStorage.setItem("pizzasState", JSON.stringify(newPizzasList));
  };
  useEffect(() => {
    const pizzasState = localStorage.getItem("pizzasState");
    if (pizzasState) {
      setPizzasList(JSON.parse(pizzasState));
    }
  }, []);

  return (
    <div className="wrap">
      <span className="heading">ПиццаВайб</span>
      <AddPizzaForm addPizza={addPizza} />
      <SearchPizza
        value={filterValue}
        onChange={setFilterValue}
        debounceTimeout={1000}
      />
      <DisplayPizzas
        filterValue={filterValue}
        pizzasList={pizzasList}
        updatePizza={updatePizza}
        deletePizza={deletePizza}
      />
    </div>
  );
};

export default HomeFeature;
