import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(() => {
		actions.getVehicleInfo(params.theid)
	})
	// console.log(store.vehicleInfo);

	return (
		<>
			<div className="jumbotron">

				<h1>name: {store.vehicleInfo.name}</h1>
				<h1>crew size: {store.vehicleInfo.crew}</h1>
				<h1 className="display-4">vehicle length: {store.vehicleInfo.length}</h1>
				<img
					src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
					className="img-fluid"
				/>


				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</>
	);
};

VehicleDetails.propTypes = {
	match: PropTypes.object
};
