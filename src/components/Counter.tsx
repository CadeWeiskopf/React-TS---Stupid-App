interface CounterProps {
  count: number;
  handleSetCount: (newCount: number) => void;
}

const Counter: React.FunctionComponent<CounterProps> = ({
  count,
  handleSetCount,
}) => {
  return (
    <div className="counter-div">
      <div className="counter-div">
        <button
          style={{
            backgroundColor: "white",
            color: "#282c34",
            borderColor: "#282c34",
          }}
          onClick={() => handleSetCount(count + 1)}
        >
          Make it Brighter
        </button>
      </div>
      <div className="counter-div">
        <button
          style={{
            backgroundColor: "#282c34",
            color: "white",
          }}
          onClick={() => handleSetCount(count - 1)}
        >
          Make it Darker
        </button>
      </div>
    </div>
  );
};

export default Counter;
