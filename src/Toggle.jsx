import React, { useState } from "react";

// Render Prop para Toggle
export const Toggle = (props) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <p
        style={{
          padding: "5px",
          border: "1px solid #fff",
          width: "max-content",
          margin: "0 auto",
          cursor: "pointer",
          background: "#0000b2",
        }}
        onClick={toggle}
      >
        Toggle
      </p>
      {props.render(visible)}
    </>
  );
};
