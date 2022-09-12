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
				const response = await axios.get(`${API_URL}/inventory`);
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
		<section className="list__section">
			<div className="list__header-container">
				<h1 className="list__title">Inventory</h1>
				<div className="list__btn-container">
					<div className="list__searchBar"></div>
					<button className="list__btn">+ Add New Item</button>
				</div>
			</div>
			<div className="list__container">
				<div className="list__label-container">
					<div className="list__label-box">
						<span className="list__label ">INVENTORY ITEM</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">CATEGOTY</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">STATUS</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">QTY</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">WAREHOUSE</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">ACTION</span>
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
