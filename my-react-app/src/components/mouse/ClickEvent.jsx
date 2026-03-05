import React from "react";

function ClickEvent() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>onClick Event</button>;
}

export default ClickEvent;