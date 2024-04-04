import React from "react";
import { Link } from "react-router-dom";
import "../../styles/component.css";
// import { CrawlText } from "./crawlText";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img src="https://i.pinimg.com/564x/b7/eb/b9/b7ebb987bdce059552a299ff1cbddb0b.jpg" className="logo navbar-brand mb-0 h1"></img>

			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn glow">Favourites</button>
				</Link>
			</div> */}
			<div className="btn-group-vertical">
				<Link to="/login">
					<button type="button" className="btn btn-danger">Login</button>
				</Link>
				<Link to="/favorites">
					<button type="button" className="btn btn-danger">Favorites</button>
				</Link>

			</div>
		</nav>
	);
};
