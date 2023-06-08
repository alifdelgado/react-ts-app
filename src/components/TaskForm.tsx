import { ChangeEvent, FormEvent, useRef } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { Task } from "../interfaces/Task";

interface Props {
  addTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

const TaskForm = ({ addTask }: Props) => {
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: HandleInputChange) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">Add Task</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="form-control"
              value={task.title}
              onChange={handleInputChange}
              autoFocus
              ref={inputTitle}
            />
          </div>
          <div className="form-group mb-3">
            <textarea
              name="description"
              placeholder="Write a description"
              className="form-control"
              value={task.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group mb-3 d-grid">
            <button type="submit" className="btn btn-primary">
              Create <FaPlusCircle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
