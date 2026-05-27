import "./ToggleButton.css";

export default function ToggleButton({ label = "Toggle", isOn, onChange, ...props }) {

  return (
    <div className="toggle-wrap" { ...props }>
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
			
      <span className="toggle-label">{label}: {isOn ? "On" : "Off"}</span>
    </div>
  );
}