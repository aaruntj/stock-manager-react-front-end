import React from "react";
import axios from "axios";
import WarehouseCard from "../../components/Warehouse/WarehouseCard/WarehouseCard";
import "./WarehousesPage.scss";
const { useEffect, useState } = require("react");

const API_URL = process.env.REACT_APP_API_URL;

function WarehousesPage() {
	const [warehouse, setWarehouse] = useState(null);

	//----- Fetch Inventory List -------
	useEffect(() => {
		const getWarehouseList = async () => {
			try {
				const response = await axios.get(`${API_URL}/`);
				console.log(response.data);
				const warehouseData = response.data;
				setWarehouse(warehouseData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getWarehouseList();
	}, []);

	if (warehouse === null || warehouse === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="warehouse">
			<div className="warehouse__header-container">
				<h1 className="warehouse__header">Warehouses</h1>
				<div className="warehouse__searchBar-container">
        <input className="warehouse__searchBar" type="text" placeholder="Search"></input>
        </div>
				<div className="warehouse__btn">+ Add New Warehouse</div>
			</div>
			<div className="warehouse__list">
				{warehouse.warehouseData.map((warehouse, index) => (
					<WarehouseCard key={index} warehouse={warehouse} />
				))}
			</div>
		</section>
	);
}

export default WarehousesPage