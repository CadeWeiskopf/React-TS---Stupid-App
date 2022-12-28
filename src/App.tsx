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

  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const rainbowDiv = document.getElementById("rainbow-div-id");
    if (rainbowDiv === null) return;

    const distanceFromTop = rainbowDiv.offsetTop;
    const distanceFromLeft = rainbowDiv.offsetLeft;
    document.documentElement.style.setProperty(
      "--rainbow-at",
      `${mouseX - distanceFromLeft}px ${mouseY - distanceFromTop}px`
    );
  }, [mouseX, mouseY]);

  return (
    <div className="App">
      <div style={{ top: 0, left: 0, position: "absolute" }}>
        {mouseX},{mouseY}
      </div>
      {count}
      <Counter count={count} handleSetCount={handleSetCount} />
      <br />
      <Rainbow />
    </div>
  );
}

export default App;
