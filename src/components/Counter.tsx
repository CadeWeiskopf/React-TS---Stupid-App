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
      <div>
        <button onClick={() => handleSetCount(count + 1)}>Click to add</button>
      </div>
      <div>
        <button onClick={() => handleSetCount(count - 1)}>
          Click to remove
        </button>
      </div>
    </div>
  );
};

export default Counter;
