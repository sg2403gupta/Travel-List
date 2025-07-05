import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 3, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleSubmitBtn(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleOnToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearBtn() {
    const confirmed = window.confirm(
      "Are you sure , you want to clear all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form handleSubmitBtn={handleSubmitBtn}></Form>
      <PackingList
        items={items}
        deleteItem={deleteItem}
        onToggleBtn={handleOnToggle}
        handleClearBtn={handleClearBtn}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
