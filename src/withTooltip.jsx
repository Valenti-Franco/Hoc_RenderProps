import { useState } from "react";

const withTooltip = (Component) => {
  return function (props) {
    const [visible, setVisible] = useState(false);

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Tooltip
        </p>
        {visible && <Component {...props} />}
      </>
    );
  };
};
export default withTooltip;
