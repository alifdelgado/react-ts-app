import { Task } from "../interfaces/Task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  deleteTask: (id: string) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-4 col-sm-6" key={task.id}>
          <TaskItem task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};

export default TaskList;
