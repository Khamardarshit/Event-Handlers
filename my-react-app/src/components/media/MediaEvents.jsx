function MediaEvents() {
  return (
    <video
      width="250"
      controls
      onPlay={() => alert("Playing")}
      onPause={() => alert("Paused")}
      onEnded={() => alert("Ended")}
    >
      <source src="sample.mp4" type="video/mp4" />
    </video>
  );
}

export default MediaEvents;