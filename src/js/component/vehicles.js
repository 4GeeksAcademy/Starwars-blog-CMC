import React, { useState, useEffect, useContext, } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getVehicles()
  })

  return (
    <div className="box">
      <ul className="card-container visible-scrollbar">
        {store.vehicles.map((item) => (
          <li key={item.uid} className="card-item">
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Click the button to learn more about {item.name}
                </p>
                <div className="ml-auto">
                <Link to={"/VehicleDetails/" + item.uid}>
								<a href="#!" className="btn btn-primary" data-mdb-ripple-init>
                  Learn more!
                </a>
							</Link>
              <button className="btn btn-primary" onClick={() => actions.addFavorite(item.name)} type="submit">
                  Add to favorites
                  </button>
			</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};