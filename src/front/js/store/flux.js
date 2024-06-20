const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			users: [],
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
			]
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			
			getUsers: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/users");
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					setStore({ users: data });
					return data;
				} catch (error) {
					console.log("Error loading users from backend", error);
				}
			},

			addUser: async (email) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/users", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email })
					});
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					// Optionally, fetch the updated list of users after adding a new one
					getActions().getUsers();
					return data;
				} catch (error) {
					console.log("Error adding user to backend", error);
				}
			},

			changeColor: (index, color) => {
				// get the store
				const store = getStore();

				// we have to loop the entire demo array to look for the respective index
				// and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				// reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
