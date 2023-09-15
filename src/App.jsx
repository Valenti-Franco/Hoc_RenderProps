import "./App.css";
import { Toggle } from "./Toggle";
import { Tooltip } from "./Tooltip";

import { Info } from "./info";
import withToggle from "./withToggle";
import withTooltip from "./withTooltip";

function App() {
  const ToggleableContent = withToggle(Info);
  const ToggleableContent2 = withTooltip(Info);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div>
        <h1>HOC</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "400px",
            background: "#222",
            height: "200px",
            flexDirection: "column",
            justifyContent: "flex-start",
            border: "1px solid",
          }}
        >
          <h3>Toggleable Content</h3>
          <ToggleableContent />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "400px",

            background: "#222",
            height: "200px",
            flexDirection: "column",
            justifyContent: "flex-start",
            border: "1px solid",
          }}
        >
          <h3>Tooltip Content</h3>
          <ToggleableContent2 />
        </div>
      </div>
      <div>
        <h1>RENDER PROPS</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "400px",

            background: "#222",
            height: "200px",
            flexDirection: "column",
            justifyContent: "flex-start",
            border: "1px solid",
          }}
        >
          <h3>Toggleable Content</h3>
          <Toggle render={(isVisible) => isVisible && <Info />} />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "400px",

            background: "#222",
            height: "200px",
            flexDirection: "column",
            justifyContent: "flex-start",
            border: "1px solid",
          }}
        >
          <h3>Tooltip Content</h3>
          <Tooltip render={(isVisible) => isVisible && <Info />} />
        </div>
      </div>
    </div>
  );
}

export default App;
