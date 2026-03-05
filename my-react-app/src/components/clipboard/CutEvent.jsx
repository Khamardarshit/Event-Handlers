function CutEvent() {
  return (
    <input
      placeholder="Cut this text"
      onCut={() => alert("Cut!")}
    />
  );
}

export default CutEvent;