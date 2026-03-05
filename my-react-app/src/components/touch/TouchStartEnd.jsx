function TouchStartEnd() {
  return (
    <div
      style={{ width: "200px", height: "100px", background: "orange" }}
      onTouchStart={() => alert("Touch Started")}
      onTouchEnd={() => alert("Touch Ended")}
    >
      Touch Area
    </div>
  );
}

export default TouchStartEnd;