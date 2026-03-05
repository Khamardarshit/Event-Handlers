import React from "react";

function KeyDownEvent() {
  const handleKeyDown = (e) => {
    alert("Key Down: " + e.key);
  };

  return <input onKeyDown={handleKeyDown} placeholder="Press a key" />;
}

export default KeyDownEvent;