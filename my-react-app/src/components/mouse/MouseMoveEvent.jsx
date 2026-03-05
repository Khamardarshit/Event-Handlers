import React, { useState } from "react";

function MouseMoveEvent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{ height: "100px", background: "lightgray" }}
      onMouseMove={handleMove}
    >
      X: {position.x} Y: {position.y}
    </div>
  );
}

export default MouseMoveEvent;