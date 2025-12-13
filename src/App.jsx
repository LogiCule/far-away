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
    <div className="min-h-screen bg-background text-foreground flex flex-col font-quicksand">
      <Logo />
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col gap-6 max-w-5xl">
        <Form setItems={setItems} />
        <PackingList items={items} setItems={setItems} />
      </div>
      <Stats items={items} />
    </div>
  );
}

export default App;
