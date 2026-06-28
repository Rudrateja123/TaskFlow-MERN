function FilterBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">
          In Progress
        </option>
        <option value="Completed">
          Completed
        </option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) =>
          setPriorityFilter(e.target.value)
        }
      >
        <option value="All">
          All Priority
        </option>
        <option value="High">High</option>
        <option value="Medium">
          Medium
        </option>
        <option value="Low">Low</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>Due Date</option>
        <option>Priority</option>
      </select>
    </div>
  );
}

export default FilterBar;