import { useEffect, useState } from "react";
import { Form, Logo, PackingList, Stats } from "./components";
import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pants", quantity: 2, packed: true },
  { id: 4, description: "Shirts", quantity: 1, packed: false },
];
function App() {
  const [items, setItems] = useState(
    localStorage.getItem("todo-list")
      ? JSON.parse(localStorage.getItem("todo-list"))
      : []
  );

  function clearList() {
    setItems([]);
    localStorage.removeItem("todo-list");
  }

  useEffect(() => {
    const storage = JSON.stringify(items);
    if (items && items.length > 0) localStorage.setItem("todo-list", storage);
  }, [items]);
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
