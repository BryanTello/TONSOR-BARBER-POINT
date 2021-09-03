import React, { useState } from "react";
import "../../styles/buscador.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//imports de Mui-date
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";

export const Buscador = () => {
	//func modal
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//func save-time
	const [saveDate, setsaveDate] = useState(new Date());

	return (
		<>
			<Button className="search-modal" onClick={handleShow}>
				<p>Selecciona aquí: dónde, cuándo y el profesional que deseas </p>{" "}
				<FontAwesomeIcon icon={faSearchPlus} />
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				animation={true}
				size="xl"
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header>
					<Modal.Title classNeme="h1-cabecera-m">Selecciona los datos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<div className="row">
							<div className="col-4">
								<h1 className="h1-cabecera-m">Selecciona el día y la hora</h1>
								<label htmlFor="datetime">Horarios</label>
								<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
									<div className="container">
										<div className="object">
											<label />
											<DateTimePicker value={saveDate} onChange={setsaveDate} />
										</div>
									</div>
								</MuiPickersUtilsProvider>
							</div>
							<div className="col-4">
								<h2 className="h1-cabecera-m">Selecciona tu servicio</h2>
								<label htmlFor="services">Servicios</label>
								<select className="form-select form-select mb-3" aria-label=".form-select example">
									<option selected>Abrir opciones</option>
									<option value="1">Corte de Cabello y Barbería</option>
									<option value="2">Depilacíon de Espalda</option>
									<option value="3">Depilacíon de torso</option>
									<option value="4">Depilacíon de piernas</option>
									<option value="5">Manicure</option>
									<option value="6">Pedicure</option>
								</select>
							</div>
							<div className="col-4">
								<h3 className="h1-cabecera-m">Selecciona a tu barbero</h3>
								<label htmlFor="barber">Buscar</label>
								<input type="text" className="form-select mb-3" />
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="butt-modal" onClick={handleClose}>
						Cerrar
					</Button>
					<Button className="butt-modal" onClick={handleShow}>
						Confirmar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
