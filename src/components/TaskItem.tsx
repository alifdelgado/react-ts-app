import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{task.done ? "Completed" : "Pending"}</div>
      <div className="card-body">
        <h4 className="card-title">{task.title}</h4>
        <p className="card-text">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskItem;
