import React from "react";

function DoubleClickEvent() {
  return (
    <button onDoubleClick={() => alert("Double Clicked!")}>
      onDoubleClick Event
    </button>
  );
}

export default DoubleClickEvent;