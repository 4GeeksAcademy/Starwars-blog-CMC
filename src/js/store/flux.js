const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			characterInfo: [],
			planetInfo: [],
			vehicleInfo: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getCharacters: (params) => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err))
			},

			getPlanets: (params) => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},

			getVehicles: (params) => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))
			},

			getCharacterInfo: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(res => res.json())
					.then(data => {
						// console.log(data.result.properties);
						setStore({ characterInfo: data.result.properties })
					})
					.catch(err => console.error(err))
			},

			getPlanetInfo: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(res => res.json())
					.then(data => {
						// console.log(data.result.properties);
						setStore({ planetInfo: data.result.properties })
					})
					.catch(err => console.error(err))
			},

			getVehicleInfo: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(res => res.json())
					.then(data => {
						// console.log(data.result.properties);
						setStore({ vehicleInfo: data.result.properties })
					})
					.catch(err => console.error(err))
			},

			addFavorite: (name) => {
				// setStore({ favorites: name });
				let favList = getStore().favorites;
				if (!favList.includes(name)) {
					const newFavList = [...favList, name];
					setStore({ favorites: newFavList });
				}
			},

			deleteFavorite: (name) => {
				console.log("delete");
				let favList = getStore().favorites;
				let newFavList = favList.filter((item) => name !== item)
				setStore({ favorites: newFavList})
			},
			favoriteTest: () => {
				console.log("hi");
			},
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
