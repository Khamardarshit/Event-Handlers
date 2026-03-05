import ClickEvent from "./components/mouse/ClickEvent";
import DoubleClickEvent from "./components/mouse/DoubleClickEvent";
import MouseEnterLeave from "./components/mouse/MouseEnterLeave";
import MouseMoveEvent from "./components/mouse/MouseMoveEvent";
import MouseDownUp from "./components/mouse/MouseDownUp";

import KeyDownEvent from "./components/keyboard/KeyDownEvent";
import KeyUpEvent from "./components/keyboard/KeyUpEvent";

import ChangeEvent from "./components/form/ChangeEvent";
import SubmitEvent from "./components/form/SubmitEvent";
import FocusBlurEvent from "./components/form/FocusBlurEvent";

import CopyEvent from "./components/clipboard/CopyEvent";
import CutEvent from "./components/clipboard/CutEvent";
import PasteEvent from "./components/clipboard/PasteEvent";

import TouchStartEnd from "./components/touch/TouchStartEnd";
import MediaEvents from "./components/media/MediaEvents";
import ResizeEvent from "./components/window/ResizeEvent";

function App() {
  return (
    <div>
      <h1>All React Events</h1>

      <ClickEvent />
      <DoubleClickEvent />
      <MouseEnterLeave />
      <MouseMoveEvent />
      <MouseDownUp />

      <KeyDownEvent />
      <KeyUpEvent />

      <ChangeEvent />
      <SubmitEvent />
      <FocusBlurEvent />

      <CopyEvent />
      <CutEvent />
      <PasteEvent />

      <TouchStartEnd />
      <MediaEvents />
      <ResizeEvent />
    </div>
  );
}

export default App;