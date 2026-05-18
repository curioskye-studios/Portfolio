import "./Toggle.css";

export default function Toggle({ label = "Toggle", on, onChange }) {

  return (
    <div className="toggle-wrap">
      <label className="toggle">
        <input
          type="checkbox"
          checked={on}
          onChange={() => onChange(!on)}
        />

        <span className="slider">
          <span className={`dot ${on ? "dot--on" : ""}`} />
        </span>
      </label>
			
      <span className="toggle-label">{label}: {on ? "On" : "Off"}</span>
    </div>
  );
}