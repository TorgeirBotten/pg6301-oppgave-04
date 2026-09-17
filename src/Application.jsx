import { useState } from "react";

export default function Application() {
  const [tasks, setTasks] = useState([
    { description: "Task 1" },
    { description: "Task 2" },
    { description: "Task 1" },
  ]);
    const [description, setDescription] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        setTasks(old=> [{description},...old])
    }

    return (
    <>
      <h1>Task Application</h1>
      <ul>
        {tasks.map((t) => (
          <li>a task: {t.description}</li>
        ))}
      </ul>
        <h2>Add a new task</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={description} onChange={e=> setDescription(e.target.value)}/>
            </div>
            <div>
                <button>Add task {description}</button>
            </div>
        </form>
    </>
  );
}
