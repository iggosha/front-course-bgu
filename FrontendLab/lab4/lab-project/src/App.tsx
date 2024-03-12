import React, { FC, useEffect, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import "./App.css";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

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
      <AddPizzaForm addPizza={addPizza}></AddPizzaForm>
      <DisplayPizzas
        pizzasList={pizzasList}
        updatePizza={updatePizza}
        deletePizza={deletePizza}
      ></DisplayPizzas>
    </div>
  );
};

export default App;
