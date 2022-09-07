const { axios } = require("axios");
const { useEffect } = require("react");

const API_URL = process.env.REACT_APP_API_URL;

const InventoryList = () => {
	//----- Fetch Inventory List -------
	useEffect(() => {
		const getInventoryList = async () => {
			try {
				const response = await axios.get(`${API_URL}/inventory/list`);
				console.log(response);
			} catch (error) {
				console.log(error.message);
			}
		};
		getInventoryList();
	}, []);

	return (
		<section className="inventory">
			<div className="inventory__header-container">
				<h1 className="inventory__header">Inventory</h1>
				<div className="inventory__searchBar"></div>
				<button className="Button">+ Add New Item</button>
			</div>
			<div className="inventory__list">{}</div>
		</section>
	);
};

export default InventoryList;
