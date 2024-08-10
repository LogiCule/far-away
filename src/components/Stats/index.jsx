const Stats = ({ items }) => {
  const total = items.length;
  const done = items.filter((item) => item.packed).length;
  const percent = Math.round((done * 100) / total);

  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        You have {total} items on your list, and you already packed {done} (
        {percent}%)
      </em>
    </footer>
  );
};

export default Stats;
