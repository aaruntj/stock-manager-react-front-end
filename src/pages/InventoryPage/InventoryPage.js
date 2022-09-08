import React from "react";
import axios from "axios";
import InventoryCard from "../../components/Inventory/InventoryCard/InventoryCard";
import "./InventoryPage.scss";
const { useEffect, useState } = require("react");

const API_URL = process.env.REACT_APP_API_URL;

const InventoryList = () => {
	const [inventory, setInventory] = useState(null);

	//----- Fetch Inventory List -------
	useEffect(() => {
		const getInventoryList = async () => {
			try {
				const response = await axios.get(`${API_URL}/inventory/list`);
				console.log(response.data.inventoryData);
				const inventoryData = response.data.inventoryData;
				setInventory(inventoryData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getInventoryList();
	}, []);

	if (inventory === null || inventory === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="inventory">
			<div className="inventory__header-container">
				<h1 className="inventory__header">Inventory</h1>
				<div className="inventory__searchBar"></div>
				<button className="inventory__btn">+ Add New Item</button>
			</div>
			<div className="inventory__list">
				{inventory.map((item, index) => (
					<InventoryCard key={index} item={item} />
				))}
			</div>
		</section>
	);
};

export default InventoryList;
