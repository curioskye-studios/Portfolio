import "./ToggleButton.css";

export default function ToggleButton({ label = "Toggle", isOn, onChange, otherClasses = '', ...props }) {

  return (
    <div className={`toggle-wrap ${otherClasses}`} { ...props }>
      <label className="toggle">
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => onChange(!isOn)}
        />

        <span className="slider">
          <span className={`dot ${isOn ? "dot--on" : ""}`} />
        </span>
      </label>
			
      <span className="toggle-label">
        {label}: {" "}
        <span className="highlight-label">{isOn ? "On" : "Off"}</span>
      </span>
    </div>
  );
}