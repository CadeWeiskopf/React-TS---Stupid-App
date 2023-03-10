interface SliderProps {
  count: number;
  brightnessScalar: number;
  handleSetCount: (newCount: number) => void;
}

const Slider: React.FunctionComponent<SliderProps> = ({
  count,
  brightnessScalar,
  handleSetCount,
}) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        min={0}
        max={50}
        value={count}
        onChange={(event) => {
          handleSetCount(Number(event.target.value));
        }}
      />
    </div>
  );
};

export default Slider;
