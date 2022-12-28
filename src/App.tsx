import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./App.css";
import Counter from "./components/Counter";
import Rainbow from "./components/Rainbow";
import Slider from "./components/Slider";

const BRIGHTNESS_SCALAR = 20;
function App() {
  const [count, setCount] = useState<number>(0);
  const handleSetCount = (newCount: number) => {
    if (newCount < 0) return;
    setCount(newCount);
  };
  useEffect(() => {
    const bgValue = count * BRIGHTNESS_SCALAR;
    const textValue = 255 - bgValue;

    // Add border to p text if could be hard to distinguish
    const pElements = document.getElementsByTagName("p");
    const numOfP = pElements.length;
    if (textValue - bgValue < 100) {
      for (let i = 0; i < numOfP; i++) {
        pElements[i].style.webkitTextStroke = "0.8px black";
        pElements[i].style.webkitTextFillColor = "white";
      }
    } else {
      for (let i = 0; i < numOfP; i++) {
        pElements[i].style.webkitTextStroke = "";
      }
    }

    document.documentElement.style.setProperty(
      "--count-background-color",
      `rgba(${bgValue},${bgValue},${bgValue},1)`
    );
    document.documentElement.style.setProperty(
      "--count-text-color",
      `rgba(${textValue},${textValue},${textValue},1)`
    );
  }, [count]);

  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (event instanceof MouseEvent) {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      } else {
        setMouseX(event.touches[0].clientX);
        setMouseY(event.touches[0].clientY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

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
        <p style={{ margin: 0 }}>Stupid App</p>
        <div style={{ fontSize: "12px" }}>By Cade Weiskopf</div>
      </div>
      <p>{count}</p>
      <Counter count={count} handleSetCount={handleSetCount} />
      {count > 0 && (
        <Confetti
          numberOfPieces={count * count}
          gravity={0.01 * count}
          wind={0.0001 * count * (Math.random() > 0.5 ? 1 : -1)}
        />
      )}
      <br />
      <Rainbow />
      <Slider
        count={count}
        brightnessScalar={BRIGHTNESS_SCALAR}
        handleSetCount={handleSetCount}
      />
    </div>
  );
}

export default App;
