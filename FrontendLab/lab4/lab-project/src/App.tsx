import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import "./App.css";
import Pizza from "./models/Pizza";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  console.log("pizzasList", pizzasList)

  return (
    <div className="wrap">
      <span className="heading">ПиццаВайб</span>
      <AddPizzaForm addPizza={addPizza}></AddPizzaForm>
    </div>
  );
};

export default App;
