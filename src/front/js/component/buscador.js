import React, { useState } from "react";
import "../../styles/buscador.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

export const Buscador = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="search-modal" onClick={handleShow}>
				<p>Selecciona aquí: dónde, cuándo y el profesional que deseas </p>{" "}
				<FontAwesomeIcon icon={faSearchPlus} />
			</Button>

			<Modal show={show} onHide={handleClose} animation={true}>
				<Modal.Header>
					<Modal.Title classNeme="h1-cabecera-m">Selecciona los datos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<div className="row">
							<div className="col-6">
								<h1 className="h1-cabecera-m">Selecciona el día</h1>
								<label htmlFor="dateofappointment">Calendario</label>{" "}
								<input type="date" className="dateofappoitment" data-id="dateofappointment" />
							</div>
							<div className="col-6">
								<h1 className="h1-cabecera-m">Selecciona a tu barbero</h1>
								<label htmlFor="barber">Tonsor</label>
								<input type="text" />
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Cerrar</Button>
					<Button onClick={handleClose}>Confirmar</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
