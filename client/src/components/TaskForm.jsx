import { useState, useEffect } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
function TaskForm({
  fetchTasks,
  editingTask,
  setEditingTask,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        description: editingTask.description || "",
        priority: editingTask.priority || "Medium",
        status: editingTask.status || "Pending",
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.split("T")[0]
          : "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
    });

    setEditingTask(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Task title is required");
      return;
    }

    if (!formData.dueDate) {
      toast.warning("Please select a due date");
      return;
    }

    try {
      if (editingTask) {
        await API.put(
          `/tasks/${editingTask._id}`,
          formData
        );

        toast.success("Task Updated Successfully");
      } else {
        await API.post("/tasks", formData);

        toast.success("Task Added Successfully");
      }

      clearForm();

      fetchTasks();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">
          In Progress
        </option>
        <option value="Completed">
          Completed
        </option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button type="submit">
          {editingTask
            ? "Update Task"
            : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={clearForm}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;