import { useRef, useState } from "react";
import ClickOutside from "./ClickOutside";

const UseOnClickOutside = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  ClickOutside(ref, () => setShowContent(false));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        position: "relative",
      }}
    >
      {showContent ? (
        <div
          ref={ref}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50px)",
            border: "1px solid red",
            maxWidth: "500px",
            padding: "10px",
          }}
        >
          <h1>Modal Box</h1>
          <h3>Click Outside the modal to close modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio aut
            excepturi, hic sit animi itaque dolores ducimus, ut eius similique
            ea consequatur fugit deleniti earum rem? Facilis velit beatae dolore
            sint repellat, esse vero, cum voluptatibus qui iste fugiat.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Open Modal Box</button>
      )}
    </div>
  );
};

export default UseOnClickOutside;
