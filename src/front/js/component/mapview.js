import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapview = () => {
	return (
		<div>
			<Map center={[40.4398942, -3.6802883]} zoom={15} scrollWheelZoom={false} id="mapid">
				<TileLayer
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[40.4398942, -3.6802883]}>
					<Popup>Estoy aquí putos!!!!</Popup>
				</Marker>
			</Map>
		</div>
	);
};

export default Mapview;
