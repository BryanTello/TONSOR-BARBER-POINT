import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
	return (
		<div className="footer-css">
			<Link to="/">
				<button className="img-button-logo btn" />
			</Link>
			<Link to="https://www.instagram.com/?hl=es" className="fontaw-icons btn">
				<FontAwesomeIcon icon={faInstagram} />
				<p className="p-light">Instagram</p>
			</Link>
			<Link to="https://es-es.facebook.com/" className="fontaw-icons btn">
				<FontAwesomeIcon icon={faFacebook} />
				<p className="p-light">Facebook</p>
			</Link>

			<Link to="/" className="p-light">
				About Us
			</Link>

			<Link to="https://www.empresasgayfriendly.com/egf-guia/" className="btn">
				<button className="img-lgtbi btn" />
			</Link>
		</div>
	);
};
