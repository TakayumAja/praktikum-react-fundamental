import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <li className={"list-item " + (item.completed ? "line" : "")}>
      {item.title}
    </li>
  );
};

export default Item;
