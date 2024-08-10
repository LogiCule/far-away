import Item from "../Item";

const PackingList = ({ items, setItems }) => {
  const addPack = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        return { ...item, packed: item.id == id ? !item.packed : item.packed };
      })
    );
  };

  const delPack = (id) => {
    setItems((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            handleChange={() => addPack(item.id)}
            handleRemove={() => delPack(item.id)}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
