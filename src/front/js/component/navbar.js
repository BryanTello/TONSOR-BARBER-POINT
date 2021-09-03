import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";
import Login from "./login.jsx";
import Register from "./register.jsx";

export const Navbar = () => {
	return (
		<nav className="location-nav">
			<div>
				<Link to="/demo" className="img-button-logo btn" />

				<div className="row position-butt-nav">
					<div className="col-3">
						<Login />
					</div>
					<div className="col-3">
						<Register />
					</div>
				</div>
			</div>
		</nav>
	);
};
