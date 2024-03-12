import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface PizzaCardProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    deletePizza(pizza.id);
  };

  return (
    <div className="pizza">
      <img src={pizza.img} alt={pizza.title}></img>
      <h2>{pizza.title}</h2>
      <span>{pizza.price}$</span>
      <div className="pizza-controls">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png"
          style={{ width: "30px", height: "30px" }}
          onClick={handleToggleEdit}
          alt={"edit icon"}
        ></img>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
          style={{ width: "30px", height: "30px" }}
          onClick={handleDelete}
          alt={"edit icon"}
        ></img>
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default PizzaCard;
