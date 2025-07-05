export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Starts adding some items to your packing list🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go✈️"
          : ` 💼You have ${numItems} items on your list , and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
