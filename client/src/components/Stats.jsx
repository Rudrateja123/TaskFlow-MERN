function Stats({ tasks }) {
  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  return (
    <div className="stats">
      <div className="card">
        <h3>Total Tasks</h3>
        <h2>{tasks.length}</h2>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <h2>{completed}</h2>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <h2>{pending}</h2>
      </div>

      <div className="card">
        <h3>In Progress</h3>
        <h2>{progress}</h2>
      </div>
    </div>
  );
}

export default Stats;