import React, { useState } from "react";

function MouseEnterLeave() {
  const [text, setText] = useState("Hover Me");

  return (
    <div
      style={{ padding: "20px", background: "lightblue" }}
      onMouseEnter={() => setText("Mouse Entered")}
      onMouseLeave={() => setText("Mouse Left")}
    >
      {text}
    </div>
  );
}

export default MouseEnterLeave;