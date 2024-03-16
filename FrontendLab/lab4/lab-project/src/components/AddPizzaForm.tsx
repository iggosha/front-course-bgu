import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
  description: ""
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
    description: string
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img, description } = newPizza;

    if (title && price && img) {
      addPizza({
        id: Date.now(),
        title,
        price: Number(price),
        img,
        description
      });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название товара"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="number"
        placeholder="Стоимость товара"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Название файла изображения"
        onChange={handleChange}
        value={newPizza.img}
      />
      <input
        name="description"
        type="text"
        placeholder="Описание товара"
        onChange={handleChange}
        value={newPizza.description}
      />
      <button type="submit">Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
