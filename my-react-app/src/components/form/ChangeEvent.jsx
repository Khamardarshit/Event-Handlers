import React, { useState } from "react";

function ChangeEvent() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here"
      />
      <p>{value}</p>
    </>
  );
}

export default ChangeEvent;