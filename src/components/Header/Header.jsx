import Wrapper from "../UI/Wrapper"
import ownerImg from "../../assets/img/owner-img.jpg"

import "./Header.css"
export default function Header() {
	return (
		<header className='header centered'>
			<Wrapper>
				<p className='header__welcome-text'>Hi! We are </p>
				<h1 className='header__heading'>4 Web Developers</h1>
				<div className='header__container'>
					<p>IT Company</p>
					<div className='header__line'></div>
					<p>Front-end web developers</p>
				</div>
				<a href='#' className='header__show-btn'>
					Show project
				</a>
				
			</Wrapper>
			<div className='header__shadow-bg'></div>
		</header>
	)
}
