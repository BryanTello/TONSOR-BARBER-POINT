import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import bigote_02 from "../../img/bigote_02.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="father-div">
			<div className="header-nav" />
			<img className="emo-barb" src={bigote_02} />
			<h1 className="h1-header">Manter tu cabello siempre perfecto ahora es fácil</h1>
			<p className="p-dark">
				TONSOR hace que sea muy sencillo mantener un look siempre perfecto, aun cuando no tengas tiempo y
				estando desde la comodidad de tu casa. Sólo tienes que selecionar tu ubicación, hora y servicio que
				deseas; del resto nos encarnamos nosotros.
			</p>

			<div className="body-service text-center">
				<h2 className="h1-header">Tener tu cabello y tu apariencia perfecta ahora es sencillo</h2>
				<div className="div-service row gy-2">
					<div className="col-4">
						<div className="btn img-service-global img-beard" />
						<p className="p-dark">Corte de cabello y Barbería</p>
					</div>
					<div className="col-4">
						<div className="btn img-back img-service-global" />
						<p className="p-dark">Depilación de espalda</p>
					</div>
					<div className="col-4">
						<div className="btn img-chest img-service-global" />
						<p className="p-dark">Depilación de torso</p>
					</div>
					<div className="col-4">
						<div className="btn img-leg img-service-global" />
						<p className="p-dark">Depilación de piernas</p>
					</div>
					<div className="col-4">
						<div className="btn img-manicure img-service-global" />
						<p className="p-dark">Manicure</p>
					</div>
					<div className="col-4">
						<div className="btn img-pedicure img-service-global" />
						<p className="p-dark">Pedicure</p>
					</div>
				</div>
			</div>
			<div className="body-service row justify-content-center">
				<div className="barber-card col-8" />
				<div className="register-barb col-4">
					<h3 className="h1-header">¿Eres un Profesional? Únete a nuestro equipo de TONSORES</h3>
					<p className="p-dark">
						Unirte a nuestro equipo es muy sencillo, sólo debes registrarte y seleccionar los servicios que
						deseas ofrecer.{" "}
					</p>
					<button size="lg" className="butt-reg">
						Registro
					</button>
				</div>
			</div>
		</div>
	);
};
