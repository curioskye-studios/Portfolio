export default function IconButton({ svgIconComponent, ...props }) {

  return (
    <button {...props}>
      {svgIconComponent}
    </button>
  );
}