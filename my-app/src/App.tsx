import { useState } from 'react'
import './App.css'

type TaskInputProps = {
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};
type TaskListProps = {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="App">
      <h2>To-do list</h2>
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

function TaskInput({ setTasks }: TaskInputProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    setTasks(prev => [...prev, text]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button id="add" onClick={handleAdd}>Add</button>
    </div>
  );
}

function TaskList({ tasks, setTasks }: TaskListProps) {
  const handleDelete = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task} 
          <button id="delete" onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default App
