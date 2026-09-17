import { useState } from "react";

export default function Application() {
  const [tasks, setTasks] = useState([
    { description: "Task 1", completed: true },
    { description: "Task 2", completed: false },
    { description: "Task 1", completed: false },
  ]);
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTasks((old) => [{ description }, ...old]);
  }

  function handleCompletedChanged(task, completed) {
    setTasks((old) => old.map((o) => (o === task ? { ...o, completed } : o)));
  }

  return (
    <>
      <h1>Task Application</h1>
      <ul>
        {tasks.map((t) => (
          <li>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={(e) => handleCompletedChanged(t, e.target.checked)}
            />
            : {t.description}
          </li>
        ))}
      </ul>
      <h2>Add a new task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button>Add task {description}</button>
        </div>
      </form>
    </>
  );
}
