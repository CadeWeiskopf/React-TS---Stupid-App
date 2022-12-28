import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);
  const handleSetCount = (newCount: number) => {
    setCount(newCount);
  };
  return (
    <div className="App">
      {count}
      <Counter count={count} handleSetCount={handleSetCount} />
    </div>
  );
}

export default App;
