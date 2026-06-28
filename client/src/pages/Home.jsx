import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import API from "../services/api";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        task.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Oldest":
          return (
            new Date(a.createdAt) -
            new Date(b.createdAt)
          );

        case "Due Date":
          return (
            new Date(a.dueDate) -
            new Date(b.dueDate)
          );

        case "Priority":
          const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3,
          };
          return (
            priorityOrder[a.priority] -
            priorityOrder[b.priority]
          );

        default:
          return (
            new Date(b.createdAt) -
            new Date(a.createdAt)
          );
      }
    });

  return (
    <>
      <Navbar />

      <div className="container">
        <Stats tasks={tasks} />

        <TaskForm
          fetchTasks={fetchTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <TaskList
          tasks={filteredTasks}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      </div>
    </>
  );
}

export default Home;