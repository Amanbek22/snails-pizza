import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // Send data to BE with axios request
    axios.post("https://605b21f027f0050017c063b9.mockapi.io/api/v3/pizza", {
      name,
      price,
      description,
      type,
      image,
    });
  };

  return (
    <div className="container">
      <Title title="Добавить продукт" position="center" />
      <form onSubmit={submit} className="d-flex">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Название"
          type="text"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
          placeholder="Цена"
          type="text"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
          placeholder="Описание"
        />
        <select
          className="input"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="pizza">Пицца</option>
          <option value="drink">Напиток</option>
        </select>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input"
          placeholder="Фото"
          type="text"
        />
        <Button title={"Добавить продукт"} />
      </form>
    </div>
  );
}

export default CreateProduct;
