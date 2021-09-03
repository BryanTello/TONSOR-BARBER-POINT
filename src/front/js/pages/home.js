import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import bigote_02 from "../../img/bigote_02.png";
import { Buscador } from "../component/buscador";

export const Home = () => {
	return (
		<div className="text-center">
			<div className="cabecera-nav" />
			<Buscador />
			<img className="emo-barb" src={bigote_02} />
			<h1 className="h1-cabecera">Manter tu cabello siempre perfecto ahora es fácil</h1>
			<p className="p-dark">
				TONSOR hace que sesa muy sencillo mantener un look simpre perfecto, aun cuando no tienes tiempo y
				estando desde la comodidad de tu casa. Sólo tienes que selecionar tu ubicación, hora ,servicio e incluso
				el profesional de tu elección; del resto nos encarnamos nosotros.
			</p>
		</div>
	);
};
