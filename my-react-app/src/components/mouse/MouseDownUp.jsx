import React, { useState } from "react";

function MouseDownUp() {
  const [status, setStatus] = useState("Click Me");

  return (
    <button
      onMouseDown={() => setStatus("Mouse Down")}
      onMouseUp={() => setStatus("Mouse Up")}
    >
      {status}
    </button>
  );
}

export default MouseDownUp;