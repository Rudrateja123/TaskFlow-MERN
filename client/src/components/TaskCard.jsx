import API from "../services/api";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks, setEditingTask }) {
  const deleteTask = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/tasks/${task._id}`);
      fetchTasks();
      toast.success("Task Deleted Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete task");
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#dc2626";
      case "Medium":
        return "#f59e0b";
      case "Low":
        return "#16a34a";
      default:
        return "#6b7280";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#16a34a";
      case "In Progress":
        return "#2563eb";
      case "Pending":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="task-card">
      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong>{" "}
        <span
          style={{
            background: getPriorityColor(task.priority),
            color: "white",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          {task.priority}
        </span>
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span
          style={{
            background: getStatusColor(task.status),
            color: "white",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          {task.status}
        </span>
      </p>

      <p>
        <strong>Due:</strong>{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() => setEditingTask(task)}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>

        <button
          onClick={deleteTask}
          style={{
            background: "#dc2626",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;