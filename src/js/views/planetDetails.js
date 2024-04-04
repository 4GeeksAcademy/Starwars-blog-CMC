import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetInfo(params.theid)
	})
	// console.log(store.planetInfo);

	return (
		<>
			<div className="jumbotron">

				<h1>name: {store.planetInfo.name}</h1>
				<h1>population: {store.planetInfo.population}</h1>
				<h1 className="display-4">terrain details: {store.planetInfo.terrain}</h1>
				<img
					src={params.theid == 1 ? `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357` : `https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
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

PlanetDetails.propTypes = {
	match: PropTypes.object
};
