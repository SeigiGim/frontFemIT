import React from "react";
import { Logo, Button } from "../index";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav class="navbar">
			<div class="container-fluid">
				<Logo />
				<Button accion={"Iniciar Sesión"} color={"btn btn-outline-light"} />
			</div>
		</nav>
	);
};

export default Navbar;
