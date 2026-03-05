import React, { useState } from "react";

function ClickEvent() {
  const [message, setMessage] = useState("Button not clicked");

  return (
    <>
      <button onClick={() => setMessage("Button Clicked!")}>
        Click Me
      </button>
      <p>{message}</p>
    </>
  );
}

export default ClickEvent;