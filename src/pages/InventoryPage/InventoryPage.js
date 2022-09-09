import React from "react";
import axios from "axios";

import "./InventoryPage.scss";

import InventoryCard from "../../components/Inventory/InventoryCard/InventoryCard";
import ArrowSort from "../../assets/icons/sort-24px.svg";

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
				<div className="inventory__list-container">
					<div className="inventory__box">
						<span className="inventory__label ">INVENTORY ITEM</span>
						<img src={ArrowSort} alt="" />
					</div>
					<div className="inventory__box">
						<span className="inventory__label ">CATEGOTY</span>
						<img src={ArrowSort} alt="" />
					</div>
					<div className="inventory__box">
						<span className="inventory__label ">STATUS</span>
						<img src={ArrowSort} alt="" />
					</div>
					<div className="inventory__box">
						<span className="inventory__label ">QTY</span>
						<img src={ArrowSort} alt="" />
					</div>
					<div className="inventory__box">
						<span className="inventory__label ">WAREHOUSE</span>
						<img src={ArrowSort} alt="" />
					</div>
					<div className="inventory__box">
						<span className="inventory__label ">ACTION</span>
						<img src={ArrowSort} alt="" />
					</div>
				</div>
				{inventory.map((item, index) => (
					<InventoryCard key={index} item={item} />
				))}
			</div>
		</section>
	);
};

export default InventoryList;
