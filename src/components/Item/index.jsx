const Item = ({ item, handleChange, handleRemove }) => {
  return (
    <li className="item">
      <input type="checkbox" value={item.packed} onClick={handleChange} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleRemove}>❌</button>
    </li>
  );
};

export default Item;
