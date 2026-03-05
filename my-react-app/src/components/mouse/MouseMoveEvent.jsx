import React, { useState } from "react";

function MouseMoveEvent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ height: "100px", background: "#f8d7da" }}
      onMouseMove={(e) =>
        setPosition({ x: e.clientX, y: e.clientY })
      }
    >
      <p>Move mouse inside this box</p>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
}

export default MouseMoveEvent;