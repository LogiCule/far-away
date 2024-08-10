import { useState } from "react";

const Form = ({ setItems }) => {
  const numList = Array.from({ length: 20 }, (_, i) => i + 1 - 0);
  const [formData, setFormData] = useState({ quantity: "1", description: "" });

  function handleSubmit(event) {
    event.preventDefault();
    setItems((items) => {
      const list = [
        ...items,
        { ...formData, id: items.length + 1, packed: false },
      ];

      return list;
    });
    setFormData({ quantity: 1, description: "" });
  }
  function handleChange(event) {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select name="quantity" value={formData.quantity} onChange={handleChange}>
        {numList.map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        name="description"
        type="text"
        placeholder="Add Item..."
        required
        value={formData.description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
