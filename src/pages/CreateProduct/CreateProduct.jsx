import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [isSending, setSending] = useState(false);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // Send data to BE with axios request
    setSending(true);
    Api.createProduct({
      name,
      price,
      description,
      type,
      image,
    })
      .then(() => {
        alert("Ура. Вы создали пиццу");
        navigate("/admin");
      })
      .catch((error) => {
        console.error(error);
        setSending(false);
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
        <Button
          disabled={isSending}
          title={isSending ? "Продукт добавляеться..." : "Добавить продукт"}
        />
      </form>
    </div>
  );
}

export default CreateProduct;
