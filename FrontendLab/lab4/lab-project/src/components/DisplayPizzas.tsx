import React, { FC } from "react";
import Pizza from "../models/Pizza";
import PizzaCard from "./PizzaCard";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
  filterValue: string;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
  filterValue,
}) => {
  return (
    <div className="container">
      {pizzasList
        .filter((pizza) =>
          pizza.title.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((pizza) => {
          return (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              updatePizza={updatePizza}
              deletePizza={deletePizza}
            />
          );
        })}
    </div>
  );
};

export default DisplayPizzas;
