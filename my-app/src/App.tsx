import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="App">
      <h2>To-do list</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a task"
      />
      <p>You're about to add "{text}" to the list.</p>

      <button onClick={() => {
        if (text.trim() === "") return;
        setTasks(prev => [...prev, text]);
        setText("");
      }}>Add it!</button>

      <h3>My list</h3>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}> {t} 
            <button id="delete" onClick={() => setTasks(prev => prev.filter((_, i) => i !== index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
