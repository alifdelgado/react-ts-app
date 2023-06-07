import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuid(),
      title: "Learn react",
      description: "Learn react",
      done: false,
    },
  ]);

  return (
    <div>
      <NavBar />
      <main className="container p-4">
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
