import React, { FC, useEffect, useState } from "react";
import Pizza from "../models/Pizza";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PizzaFeature: FC = () => {
  const [pizza, setPizza] = useState<Pizza | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const pizzasState = localStorage.getItem("pizzasState");
    if (pizzasState && id) {
      const pizzasList = JSON.parse(pizzasState);
      const idNumber = parseInt(id);

      const currentPizza = pizzasList.find((p: Pizza) => p.id === idNumber);
      setPizza(currentPizza);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="pizza pizza-page">
        <img src={pizza?.img} alt={pizza?.title} />
        <h2>{pizza?.title}</h2>
        <span>{pizza?.price}$</span>
        <p>BEST</p>
      </div>
      <Footer />
    </>
  );
};

export default PizzaFeature;
