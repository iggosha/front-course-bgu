import React, { FC, useEffect, useState } from "react";
import AddPizzaForm from "../components/AddPizzaForm";
import DisplayPizzas from "../components/DisplayPizzas";
import SearchPizza from "../components/internal/SearchPizza";
import Pizza from "../models/Pizza";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
  const searchPizzaObj = () => {
    return (
      <SearchPizza
        value={filterValue}
        onChange={setFilterValue}
        debounceTimeout={1000}
      />
    );
  };

  return (
    <div className="wrap">
      <Header searchPizza={searchPizzaObj()} />
      <div style={{marginTop: "100px"}}></div>
      <AddPizzaForm addPizza={addPizza} />
      <DisplayPizzas
        filterValue={filterValue}
        pizzasList={pizzasList}
        updatePizza={updatePizza}
        deletePizza={deletePizza}
      />
      <Footer />
    </div>
  );
};

export default HomeFeature;
