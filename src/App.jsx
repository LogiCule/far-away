import { useEffect, useState } from "react";
import { Form, Logo, PackingList, Stats } from "./components";
import "./index.css";

function App() {
  const [items, setItems] = useState(
    localStorage.getItem("todo-list")
      ? JSON.parse(localStorage.getItem("todo-list"))
      : []
  );

  useEffect(() => {
    const storage = JSON.stringify(items);
    localStorage.setItem("todo-list", storage);
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
