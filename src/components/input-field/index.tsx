interface Props {
  inputWidth?: string;
  placeholder?: string;
  currentValue?: string;
}

export const InputField = ({
  inputWidth,
  placeholder,
  currentValue,
}: Props) => {
  return (
    <input
      type="text"
      value={currentValue}
      style={{
        height: "40px",
        padding: "10px",
        border: "1px solid black",
        width: inputWidth,
      }}
      placeholder={placeholder}
    />
  );
};
