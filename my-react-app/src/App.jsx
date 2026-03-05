import "./App.css";

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

function App() {
  return (
    <div className="app">
      <h1>React Event Handlers Demo</h1>

      {/* Mouse Events */}
      <div className="section">
        <h2>🖱️ Mouse Events</h2>

        <div className="event-box"><ClickEvent /></div>
        <div className="event-box"><DoubleClickEvent /></div>
        <div className="event-box"><MouseEnterLeave /></div>
        <div className="event-box"><MouseMoveEvent /></div>
        <div className="event-box"><MouseDownUp /></div>
      </div>

      {/* Keyboard Events */}
      <div className="section">
        <h2>⌨️ Keyboard Events</h2>

        <div className="event-box"><KeyDownEvent /></div>
        <div className="event-box"><KeyUpEvent /></div>
      </div>

      {/* Form Events */}
      <div className="section">
        <h2>📝 Form Events</h2>

        <div className="event-box"><ChangeEvent /></div>
        <div className="event-box"><SubmitEvent /></div>
        <div className="event-box"><FocusBlurEvent /></div>
      </div>
    </div>
  );
}

export default App;