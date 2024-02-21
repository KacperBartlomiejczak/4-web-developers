import "./Hamburger.css";

export default function Hamburger({ isClicked, ...props }) {
  return (
    <button
      {...props}
      className={
        isClicked
          ? "hamburger hamburger--3dx is-active"
          : "hamburger hamburger--3dx"
      }
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
