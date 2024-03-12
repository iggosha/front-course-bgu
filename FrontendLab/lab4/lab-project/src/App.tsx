import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import "./App.css";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
  };

  console.log("pizzasList", pizzasList);

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
