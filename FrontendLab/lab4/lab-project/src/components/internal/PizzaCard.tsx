import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import Pizza from "../../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";

interface PizzaCardProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [isEditing, setEditing] = useState<boolean>(false);
  const handleToggleEdit = () => {
    setEditing(!isEditing);
  };
  const handleDelete = () => {
    deletePizza(pizza.id);
  };

  return (
    <div className="pizza">
      <img src={pizza.img} alt={pizza.title}></img>
      <h2>
        <Link to={`/pizza/${pizza.id}`}> {pizza.title}</Link>
      </h2>
      <span>{pizza.price}$</span>
      <div className="pizza-controls">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6049/6049305.png"
          style={{ width: "30px", height: "30px" }}
          onClick={handleToggleEdit}
          alt={"edit icon"}
        ></img>
        <Link to={`/`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            style={{ width: "30px", height: "30px" }}
            onClick={handleDelete}
            alt={"delete icon"}
          ></img>
        </Link>
      </div>

      {isEditing ? (
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
