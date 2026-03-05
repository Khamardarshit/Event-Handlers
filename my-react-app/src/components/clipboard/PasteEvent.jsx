function PasteEvent() {
  return (
    <input
      placeholder="Paste here"
      onPaste={() => alert("Pasted!")}
    />
  );
}

export default PasteEvent;