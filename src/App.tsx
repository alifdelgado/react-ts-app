import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuid(),
      title: "Learn react",
      description: "Learn react",
      done: false,
    },
  ]);

  const addTask = (task: Task) =>
    setTasks([...tasks, { ...task, id: uuid(), done: false }]);

  const deleteTask = (id: string) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div>
      <NavBar />
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4 col-sm-12 my-sm-3">
            <TaskForm addTask={addTask} />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
