import React, { useState } from "react";

function MouseEnterLeave() {
  const [status, setStatus] = useState("Mouse not inside");

  return (
    <div
      style={{ padding: "15px", background: "#d1ecf1" }}
      onMouseEnter={() => setStatus("Mouse Entered")}
      onMouseLeave={() => setStatus("Mouse Left")}
    >
      Hover Here
      <p>Status: {status}</p>
    </div>
  );
}

export default MouseEnterLeave;