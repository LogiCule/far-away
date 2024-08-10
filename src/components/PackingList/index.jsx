import Item from "../Item";

const PackingList = ({ items, setItems }) => {
  const changePack = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        return { ...item, packed: item.id == id ? !item.packed : item.packed };
      })
    );
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            handleChange={() => changePack(item.id)}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
