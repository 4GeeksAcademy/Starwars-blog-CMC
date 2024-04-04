import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};


// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { Routes, Route, useParams } from 'react-router-dom';
// import { Context } from "../store/appContext";
// import "../../styles/demo.css";
// export const Demo = () => {
//     const { store, actions } = useContext(Context);
//     const params = useParams()
//     const direcProp = store.masInfo.properties
//     const [div2 , setDiv2]= useState({
//         name:"Birth Year",
//         info: direcProp?.birth_year
//     })
//     const [div3 , setDiv3]= useState({
//         name:"Gender",
//         info:direcProp?.gender
//     })
//     const [div4 , setDiv4]= useState({
//         name:"Height",
//         info:direcProp?.height
//     })
//     const [div5 , setDiv5]= useState({
//         name:"Skin Color",
//         info:direcProp?.skin_color
//     })
//     const [div6 , setDiv6]= useState({
//         name:"Eye Color",
//         info:direcProp?.eye_color
//     })
//     function categorias() {
//         if (params.categorias=="planet") {
//             setDiv2({name: "Gravity" ,info: direcProp?.gravity})
//             setDiv3({name: "Diamer" ,info: direcProp?.diamer})
//             setDiv4({name: "Climate" ,info: direcProp?.climate})
//             setDiv5({name: "Population" ,info: direcProp?.population})
//             setDiv6({name: "Terrain" ,info: direcProp?.terrain})
//         } else if (params.categorias=="vehicles"){
//             setDiv2({name: "Model" ,info: direcProp?.model})
//             setDiv3({name: "Vehicle Class" ,info: direcProp?.vehicle_class})
//             setDiv4({name: "Passengers" ,info: direcProp?.passengers})
//             setDiv5({name: "Length" ,info: direcProp?.length})
//             setDiv6({name: "Consumables" ,info: direcProp?.consumables})
//         } else {
//         }
//     }
//     useEffect(() => {
//         actions.getMasInfo(params.categorias, params.uid)
//         categorias()
//     })
//     // console.log(store.masInfo);
//     return (
//         <div className="container ">
//             {/* <h1>{direcProp?.height}</h1> */}
//             <div className="ROW d-flex justify-content-between mb-5">
//                 <div>
//                     <img src="https://depor.com/resizer/t_XnEOGRLM91FlZa7TitLM4sdPs=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HKYWPKEQBJB6NMXZ2M372JK7PA.jpg" />
//                 </div>
//                 <div className="text-center">
//                     <h1>{direcProp?.name}</h1>
//                     <p>{store.masInfo.description}</p>
//                 </div>
//             </div>
//             <div className="ROW d-flex justify-content-between mb-5">
//                 <div>
//                     <h6>Name</h6>
//                     <p>{direcProp?.name}</p>
//                 </div>
//                 <div>
//                     <h6>{div2.name}</h6>
//                     <p>{div2.info}</p>
//                 </div>
//                 <div>
//                     <h6>{div3.name}</h6>
//                     <p>{div3.info}</p>
//                 </div>
//                 <div>
//                     <h6>{div4.name}</h6>
//                     <p>{div4.info}</p>
//                 </div>
//                 <div>
//                     <h6>{div5.name}</h6>
//                     <p>{div5.info}</p>
//                 </div>
//                 <div>
//                     <h6>{div6.name}</h6>
//                     <p>{div6.info}</p>
//                 </div>
//             </div>
//             <Link to="/">
//                 <button className="btn btn-primary">Back home</button>
//             </Link>
//         </div>
//     );
// };