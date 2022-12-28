import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Rainbow from "./components/Rainbow";

function App() {
  const [count, setCount] = useState<number>(0);
  const handleSetCount = (newCount: number) => {
    if (newCount < 0) return;
    setCount(newCount);
  };
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--count-background-color",
      `rgba(${count * 2},${count * 2},${count * 2},1)`
    );
    document.documentElement.style.setProperty(
      "--count-text-color",
      `rgba(${255 - count * 2},${255 - count * 2},${255 - count * 2},1)`
    );
  }, [count]);

  return (
    <div className="App">
      {count}
      <Counter count={count} handleSetCount={handleSetCount} />
      <br />
      <Rainbow />
    </div>
  );
}

export default App;
