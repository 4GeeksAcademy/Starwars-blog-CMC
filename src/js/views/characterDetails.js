import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(() => {
		actions.getCharacterInfo(params.theid)
	})
	// console.log(store.characterInfo);

	return (
		<>
			<div className="jumbotron">

				<h1>name: {store.characterInfo.name}</h1>
				<h1>{store.characterInfo.gender}</h1>
				<h1 className="display-4">This will show the demo element: {store.characterInfo.homeworld}</h1>
				<img
					src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
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

CharacterDetails.propTypes = {
	match: PropTypes.object
};
