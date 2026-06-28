import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <h3>No Tasks Available</h3>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditingTask={setEditingTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;