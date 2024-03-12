import React, { FC } from "react";
import Pizza from "../models/Pizza";
import PizzaCard from "./PizzaCard";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <PizzaCard key={pizza.id} pizza={pizza} updatePizza={updatePizza} />;
      })}
    </div>
  );
};

// https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg

export default DisplayPizzas;
