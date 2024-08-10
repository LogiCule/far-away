const Item = ({ item, handleChange }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => handleChange()}>
        {item.packed ? "✅" : "❌"}
      </button>
    </li>
  );
};

export default Item;
