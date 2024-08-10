const Stats = ({ items }) => {
  const total = items.length;
  const done = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        You have {total} items on your list, and you already packed {done} (
        {Math.round((done * 100) / total)}%)
      </em>
    </footer>
  );
};

export default Stats;
