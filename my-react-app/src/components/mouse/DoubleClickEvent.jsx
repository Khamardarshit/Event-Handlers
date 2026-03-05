import React, { useState } from "react";

function DoubleClickEvent() {
  const [message, setMessage] = useState("Double click the button");

  return (
    <>
      <button onDoubleClick={() => setMessage("Button Double Clicked!")}>
        Double Click Me
      </button>
      <p>Status: {message}</p>
    </>
  );
}

export default DoubleClickEvent;