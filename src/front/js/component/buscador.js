import React from "react";
import { Link } from "react-router-dom";

export const Buscador = () => {
	return (
		<div className="search-css">
			<input type="text" name="search" placeholder="search" />
			<botton type="submit" className="btn btn-search fa fa-search" />
		</div>
	);
};
