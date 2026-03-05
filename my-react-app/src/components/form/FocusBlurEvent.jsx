import React, { useState } from "react";

function FocusBlurEvent() {
  const [status, setStatus] = useState("");

  return (
    <>
      <input
        onFocus={() => setStatus("Focused")}
        onBlur={() => setStatus("Blurred")}
        placeholder="Focus me"
      />
      <p>{status}</p>
    </>
  );
}

export default FocusBlurEvent;