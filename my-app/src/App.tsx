import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

type Item = {  
  id: number;
  title: string;
  bought: boolean;
};

function App() {
  const [items, setItems] = useState<Item[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const addItem = (title: string) => {
    if (title.trim() === "") return;
    setItems(prev => [...prev, { id: Date.now(), title, bought: false }]);
  }

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  const toggleBought = (id: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, bought: !item.bought } : item));
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <h2>🛒 Shopping List</h2>
      <ItemInput onAdd={addItem} />
      <ItemList 
        items={items} 
        onDelete={removeItem}
        onToggleBought={toggleBought}
      />
    </div>
  );
}

function ItemInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Type a product..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        onAdd(text);
        setText("");
      }}>
        Add
      </button>
    </div>
  );
}

function ItemList({
  items,
  onDelete,
  onToggleBought
}: {
  items: Item[];
  onDelete: (id: number) => void;
  onToggleBought: (id: number) => void;
}) {
  return (
    <>
      {items.map(item => (
        <p key={item.id} style={{ color: item.bought ? "gray" : "white", textDecoration: item.bought ? "line-through" : "none" }}>
          {item.title}
          <button id="delete" onClick={() => onDelete(item.id)}>❌</button>
          <button id="bought" onClick={() => onToggleBought(item.id)}>
            {item.bought ? "🔄️" : "💲"}
          </button>
        </p>
      ))}
    </>
  );
}

export default App