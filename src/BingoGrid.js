import BingoBlock from "./BingoBlock.js";

export default function (props) {
  const arr = [];
  for (let i = 0; i < Math.pow(props.size, 2); i++) {
    arr.push(<BingoBlock size={props.size} />);
  }
  return (
    <div
      style={{
        width: "90vmin",
        height: "90vmin",
        lineHeight: "0%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        outline: "1px solid #000000",
        padding: "0px",
      }}
    >
      {arr}
    </div>
  );
}
