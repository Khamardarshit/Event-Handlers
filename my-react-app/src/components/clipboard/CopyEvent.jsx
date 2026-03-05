function CopyEvent() {
  return (
    <input
      placeholder="Copy this text"
      onCopy={() => alert("Copied!")}
    />
  );
}

export default CopyEvent;