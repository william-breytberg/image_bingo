import { useState } from "react";

export default function ColorText(props) {
    const [color,setColor] = useState("#0000ff");
  return (
    <div>
        <p style={{color, fontSize:props.size}}>test</p>
      <input onChange={(event) => setColor(event.target.value)} type="color" />
    </div>
  );
}