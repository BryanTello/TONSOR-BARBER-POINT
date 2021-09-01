import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";
import { Buscador } from "./buscador.js";

export const Navbar = () => {
	return (
		<nav className="location-nav">
			<div className="ml-auto">
				<Link to="/demo" className="img-button-logo btn" />
				<button size="lg" className="butt-nav">
					Login
				</button>{" "}
				<button size="lg" className="butt-nav">
					Registro
				</button>
			</div>
			<Buscador />
		</nav>
	);
};
