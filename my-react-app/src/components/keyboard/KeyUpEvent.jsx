import React from "react";

function KeyUpEvent() {
  return (
    <input
      onKeyUp={(e) => alert("Key Released: " + e.key)}
      placeholder="Release key"
    />
  );
}

export default KeyUpEvent;