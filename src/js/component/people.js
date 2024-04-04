import React, { useState, useEffect, useContext, } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const People = () => {

  const { store, actions } = useContext(Context)
  
  useEffect(() => {
    actions.getCharacters()
    
  })

  return (
    <div className="box">
      <ul className="card-container visible-scrollbar">
        {store.people.map((item) => (
          <li key={item.uid} className="card-item">
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
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
                  <Link to={"/CharacterDetails/" + item.uid} className="btn btn-primary mr-2">
                    Learn more!
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