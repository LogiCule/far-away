import { useEffect, useState } from "react";
import Item from "../Item";

const PackingList = ({ items, setItems }) => {
  const [sortOrder, setSortOrder] = useState("id");

  const addPack = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        return { ...item, packed: item.id == id ? !item.packed : item.packed };
      })
    );
    sortData();
  };

  const delPack = (id) => {
    setItems((prev) => prev.filter((item) => item.id != id));
    sortData();
  };

  const clearList = () => {
    setItems([]);
    localStorage.removeItem("todo-list");
  };

  const sortData = () => {
    console.log("inside sort");

    setItems((prev) => {
      const list = [...prev];
      list.sort((a, b) => {
        if (sortOrder === "description")
          return a[sortOrder].localeCompare(b[sortOrder]);
        else return a[sortOrder] - b[sortOrder];
      });
      return list;
    });
  };

  const sortChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    sortData();
  }, [sortOrder]);

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
      <div className="actions">
        <select value={sortOrder} onChange={sortChange}>
          <option value="id">Sort by Order</option>
          <option value="description">Sort by Desc</option>
          <option value="packed">Sort by Status</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
