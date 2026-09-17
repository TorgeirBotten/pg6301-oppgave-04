import { useState } from "react";

export default function Application() {
  const [tasks, setTasks] = useState([
    { description: "Task 1" },
    { description: "Task 2" },
    { description: "Task 1" },
  ]);
  return (
    <>
      <h1>Task Application</h1>
      <ul>
        {tasks.map((t) => (
          <li>a task: {t.description}</li>
        ))}
      </ul>
    </>
  );
}
