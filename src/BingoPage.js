import BingoGrid from "./BingoGrid.js";

export default function (props) {
  return (
    <div
      style={{
        //display: "flex",
        //alignItems: "center",
        //justifyContent: "center",
        padding: "0px",
      }}
    >
      <h1>Favorite Character Bingo</h1> <br />
      <BingoGrid size={5} />
      <br />
      <button type="button">Download PNG</button>
    </div>
  );
}
