import "./Hamburger.css"

export default function Hamburger({ isClicked, ...props }) {
	return (
	<button {...props} class={isClicked ? "hamburger hamburger--3dx is-active": "hamburger hamburger--3dx"} type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
	)
}
