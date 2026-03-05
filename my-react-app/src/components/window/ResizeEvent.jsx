import React, { useEffect, useState } from "react";

function ResizeEvent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Window Width: {width}px</p>;
}

export default ResizeEvent;