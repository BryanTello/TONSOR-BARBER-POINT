import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Register = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();

	const getBarber = data => {
		actions.barber(data);
	};
	const getClient = data => {
		actions.client(data);
	};

	return (
		<form
			action=""
			method="post" //onSubmit={if }
		>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Registro</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<p className="yourRole">Elige tu role</p>
						<div className="myRole">
							<input
								type="button"
								className="barberButton"
								value="Barbero"
								onClick={handleSubmit(getBarber)}
							/>
							<input
								type="button"
								className="customerButton"
								value="Cliente"
								onClick={handleSubmit(getClient)}
							/>
						</div>
						<div className="myHolder">
							<hr />
							<p className="myDivider">Or</p>
							<hr />
						</div>
					</div>
					<div>
						<div className="accessGoogle">
							<button type="button" className="googleAcc">
								Registrar con Google <i className="fab fa-google" />
							</button>
						</div>
						<div className="myInputs">
							<label htmlFor="myName" className="myLabel">
								Nombre:
							</label>

							<input type="text" id="myName" name="myName" className="myInput" {...register("name")} />

							<label htmlFor="mySurname" className="myLabel">
								Apellido:
							</label>

							<input
								type="text"
								id="mySurname"
								name="mySurname"
								className="myInput"
								{...register("lastname")}
							/>
							<label htmlFor="email" className="myLabel">
								Correo electronico:
							</label>

							<input type="email" id="email" name="email" className="myInput" {...register("email")} />

							<label htmlFor="MyNum" className="myLabel">
								Numero de telefono:
							</label>

							<input
								type="number"
								id="myNum"
								name="myNum"
								className="myInput"
								{...register("phone_number")}
							/>
							<label htmlFor="myLocation" className="myLabel">
								Ciudad:
							</label>

							<input
								type="text"
								id="myLocation"
								name="myLocation"
								className="myInput"
								{...register("city")}
							/>

							<label htmlFor="myAddress" className="myLabel">
								Direcion:
							</label>

							<input
								type="text"
								id="myAddress"
								name="myAddress"
								className="myInput"
								{...register("address")}
							/>

							<label htmlFor="cp" className="myLabel">
								Codigo postal:
							</label>

							<input type="password" id="cp" name="cp" className="myInput" {...register("cp")} />

							<label htmlFor="pwd" className="myLabel">
								Contraseña:
							</label>

							<input type="password" id="pwd" name="pwd" className="myInput" {...register("password")} />
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<input type="submit" value="Registrar" className="registerButton2" />
				</Modal.Footer>
			</Modal.Dialog>
		</form>
	);
};

export default Register;
