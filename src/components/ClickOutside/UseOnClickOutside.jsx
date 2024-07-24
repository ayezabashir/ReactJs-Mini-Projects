import { useState } from "react";

const UseOnClickOutside = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: '100px'
      }}
    >
      {showContent ? (
        <div>Click Outside the box</div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutside;
