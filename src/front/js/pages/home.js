import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

/*import "../../styles/modals.scss";
import "../../styles/addServiceButton.scss";
import "../../styles/addService.scss";

import Login from "../component/login.jsx";
import RegisterClient from "../component/registerClient.jsx";
import Role from "../component/role.jsx";
import RegisterBarber from "../component/registerBarber.jsx";
import AddServiceButton from "../component/addServiceButton.jsx";
import AddService from "../component/addService.jsx";*/

import { ChooseTonsor } from "../pages/chooseTonsor.js";

export const Home = () => {
	return (
		<div>
			<ChooseTonsor />
		</div>
	);
};
