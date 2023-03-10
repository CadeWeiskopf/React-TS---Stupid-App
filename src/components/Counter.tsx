interface CounterProps {
  count: number;
  handleSetCount: (newCount: number) => void;
}

const Counter: React.FunctionComponent<CounterProps> = ({
  count,
  handleSetCount,
}) => {
  return (
    <div>
      <div style={{ maxWidth: "200px", width: "100%" }}>
        <button
          className="gradient-button"
          onClick={() => handleSetCount(count + 1)}
        >
          <p>
            <big style={{ fontSize: "24px" }}>Brighter</big>
          </p>
        </button>
      </div>
      <div>
        <button
          className="gradient-button"
          onClick={() => handleSetCount(count - 1)}
        >
          <p>
            <big style={{ fontSize: "24px" }}>Darker</big>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Counter;
