import "./Navbar.css"
import Wrapper from "../UI/Wrapper"
import Hamburger from "../Hamburger/Hamburger"

import Link from "./Link"
import { useState } from "react"

export default function Navbar() {
	const [isClicked, setIsClicked] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)



	function clickHandler() {
		setIsClicked(!isClicked)
		if (isClicked) {
			document.body.style.overflow = "auto"
		} else {
			document.body.style.overflow = "hidden"
		}
	}

	function linkHandler() {
		setIsClicked(false)
		document.body.style.overflow = "auto"
	}

	return (
		<nav className='nav centered'>
			<Wrapper>
				<a href='#' className='nav__heading'>
					<h2>4 Web</h2>
				</a>
				<ul className={isClicked ? "nav__list is-active" : "nav__list"}>
					<Link linkName='Home' linkProvider='#' onClick={linkHandler} />
					<Link linkName='Our Team' linkProvider='#ourTeam' onClick={linkHandler} />
					<Link linkName='Work' linkProvider='#' onClick={linkHandler} />
					<Link
						className='contact-link nav__link'
						linkName='Contact'
						linkProvider='#'
						onClick={linkHandler}
					/>
				</ul>
				<Hamburger isClicked={isClicked} onClick={clickHandler} />
			</Wrapper>
		</nav>
	)
}
