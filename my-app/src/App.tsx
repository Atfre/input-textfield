import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>You're typing: {text}</p>
    </div>
  );
}

export default App
