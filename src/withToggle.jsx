import React, { useState } from "react";

const withToggle = (Component) => {
  return function (props) {
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
            background: "#3c96b2",
          }}
          onClick={toggle}
        >
          Toggle
        </p>
        {visible && <Component {...props} />}
      </>
    );
  };
};

export default withToggle;
