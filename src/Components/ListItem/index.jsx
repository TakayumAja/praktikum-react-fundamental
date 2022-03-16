import React from "react";
import Item from "../Item";
import "./Listitem.css";

const List = () => {
  const items = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
  ];
  return (
    <ul className="card">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
