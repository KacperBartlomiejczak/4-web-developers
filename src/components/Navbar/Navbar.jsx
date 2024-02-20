import "./Navbar.css"
import Wrapper from "../UI/Wrapper"
import Hamburger from "../Hamburger/Hamburger"
import { useState } from "react"

export default function Navbar() {
	const [isClicked, setIsClicked] = useState(false)
	function clickHandler() {
		setIsClicked(!isClicked)
		if (isClicked) {
			document.body.style.overflow = "auto"
		} else {
			document.body.style.overflow = "hidden"
		}
	}

	return (
		<nav className='nav'>
			<Wrapper>
				<a href='#' className='nav__heading'>
					<h2>4Web</h2>
				</a>
				<ul className='nav__list'>
					<li>
						<a href='#' className='nav__link'>
							Home
						</a>
					</li>
					<li>
						<a href='#' className='nav__link'>
							Work
						</a>
					</li>
					<li>
						<a href='#' className='nav__link'>
							Projects
						</a>
					</li>
					<li>
						<a href='#' className='nav__link nav__link--green'>
							Contact
						</a>
					</li>
				</ul>
				<Hamburger isClicked={isClicked} onClick={clickHandler} />
			</Wrapper>
		</nav>
	)
}
