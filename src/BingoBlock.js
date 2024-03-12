import { useState } from "react";

export default function (props) {
  const [imageURL, changeImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg"
  );
  const scale = 100 / props.size + "%";
  return (
    <label>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          if (event.target.files != undefined) {
            if (event.target.files.length != 0) {
              changeImage(URL.createObjectURL(event.target.files[0]));
            }
          }
        }}
        name="filename"
        style={{ display: "none" }}
      />
      <img
        src={imageURL}
        style={{
          height: scale,
          width: scale,
          objectFit: "cover",
          objectPosition: " top",
          outline: "1px solid #000000",
          outlineOffset: "-1px",
        }}
      />
    </label>
  );
}
