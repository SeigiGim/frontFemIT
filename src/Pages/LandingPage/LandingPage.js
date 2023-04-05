import * as React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { NavbarLanding } from "../../components";
import Button from "@mui/material/Button";
import imagen from "./assets/img/ilustracion_01.svg";
import imagen2 from "./assets/img/ilustracion_02.svg";
import imagenDivision from "./assets/img/division.svg";
import "./landingPage.css";

const LandingPage = () => {
	return (
		<div className="landing-container">
			<NavbarLanding />
			<header className="container-fluid row mt-5">
				<section className="col-xs-12 col-md-6 about">
					<h1 className="titulo">¡Únete a FemIT!</h1>
					<p>
						{" "}
						El lugar perfecto para conectar con otras mujeres de la industria,
						compartir experiencias y oportunidades laborales.
					</p>
					<p>
						Únete a nuestra comunidad de mujeres en la tecnología y descubre
						cómo FemIT puede ayudarte a alcanzar tus metas profesionales y
						personales. ¡Te esperamos!
					</p>
					<Link to="/RegisterPage">
						<Button variant={"contained"} color={"primary"}>
							{"Registrarse"}
						</Button>
					</Link>
				</section>
				<section className="col-xs-12 col-md-6 about">
					<ReactSVG src={imagen} />
				</section>
			</header>
			<main className="container-fluid row mt-5">
				<section className="division col-12">
					<ReactSVG src={imagenDivision} />
				</section>
				<section className="col-xs-12 col-md-6">
					<ReactSVG src={imagen2} />
				</section>
			</main>
		</div>
	);
};

export default LandingPage;
