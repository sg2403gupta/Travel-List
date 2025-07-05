import { useState } from "react";

export default function Form({ handleSubmitBtn }) {
  const [inputVal, setInputVal] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddBtn(e) {
    e.preventDefault();

    if (!inputVal) return;
    const newItems = {
      quantity,
      description: inputVal,
      packed: false,
      id: Date.now(),
    };

    handleSubmitBtn(newItems);

    setInputVal("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleAddBtn}>
      <h3>What do you need for your 😍 trip.</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items.."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
