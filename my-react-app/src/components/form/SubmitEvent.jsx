import React from "react";

function SubmitEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default SubmitEvent;