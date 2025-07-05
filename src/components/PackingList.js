import { useState } from "react";
import Items from "./Items";

export default function PackingList({
  items,
  deleteItem,
  onToggleBtn,
  handleClearBtn,
}) {
  const [sortBy, setSortBy] = useState("byInput");
  let sortedItems;
  if (sortBy === "byInput") sortedItems = items;

  if (sortBy === "byDescription")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "byPackedStatus")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            onToggleBtn={onToggleBtn}
          ></Items>
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="byInput">SORT BY INPUT ORDER</option>
          <option value="byDescription">SORT BY DESCRIPTION</option>
          <option value="byPackedStatus">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={handleClearBtn}>Clear List</button>
      </div>
    </div>
  );
}
