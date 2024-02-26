import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import OurTeam from "./components/OurTeam/OurTeam"
import "./App.css"

function App() {
	return (
		<main>
			<Navbar></Navbar>
			<Header></Header>
			<OurTeam></OurTeam>
		</main>
	)
}

export default App
