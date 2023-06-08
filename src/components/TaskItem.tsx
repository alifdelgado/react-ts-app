import { FaTrashAlt } from "react-icons/fa";
import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
}

const TaskItem = ({ task, deleteTask }: Props) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{task.done ? "Completed" : "Pending"}</div>
      <div className="card-body">
        <h4 className="card-title">{task.title}</h4>
        <p className="card-text">{task.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button
          className="btn btn-danger"
          onClick={() => task.id && deleteTask(task.id)}
        >
          Delete <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
