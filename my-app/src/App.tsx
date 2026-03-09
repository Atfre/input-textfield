import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState<string[]>([]);

  return (
    <div className="App">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Username"
      />

      <p>Do you want to add {text} to the list?</p>
      <button onClick={() => {
        if (text.trim() === "") return;
        setName(prev => [...prev, text]);
        setText("");
      }}>Add</button>

      <h3>Users</h3>
      {name.map((n, index) => (
          <p key={index}>{n}</p>
      ))}

    </div>
  );
}

export default App
