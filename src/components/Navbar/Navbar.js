import React from "react";
import { Link } from "react-router-dom";
import { Logo, Button } from "../index";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav class="navbar">
			<div class="container-fluid">
				<Logo />

				<Link to="/LoginPage">
					<Button accion={"Iniciar Sesión"} color={"btn btn-outline-light"} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
