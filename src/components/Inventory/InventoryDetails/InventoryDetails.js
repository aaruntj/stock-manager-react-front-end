import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./InventoryDetails.scss";
import ArrowIcon from "../../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../../assets/icons/edit.svg";

const API_URL = process.env.REACT_APP_API_URL;

const InventoryDetails = () => {
	const [item, setItem] = useState(null);
	console.log(item);
	const { itemId } = useParams();

	//------- Fetch item details data ------
	useEffect(() => {
		const getItemDetails = async () => {
			try {
				const response = await axios.get(`${API_URL}/inventory/${itemId}`);
				console.log(response);
				const itemDetailsData = await response.data.inventoryItem;
				setItem(itemDetailsData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getItemDetails();
	}, [itemId]);

	//-------- safe guard ---------
	if (item === null || item === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="inventory-item">
			<div className="inventory-item__header-container">
				<span className="inventory-item__title">
					<img src={ArrowIcon} alt="" />
					<h1>{item.itemName}</h1>
				</span>
				<img className="inventory-item__edit" src={EditIcon} alt="" />
			</div>
			<div className="inventory-item__details">
				<span className="inventory-item__label">ITEM DESCRIPTION:</span>
				<p className="inventory-item__content">{item.description}</p>
				<span className="inventory-item__label">CATEGORY:</span>
				<p className="inventory-item__content">{item.category}</p>
				<div className="inventory-item__container">
					<div className="inventory-item__box">
						<span className="inventory-item__label">STATUS:</span>
						<p className="inventory-item__status-green">{item.category}</p>
					</div>
					<div className="inventory-item__box">
						<span className="inventory-item__label">QUANTITY:</span>
						<p className="inventory-item__content">{item.quantity}</p>
					</div>
				</div>

				<span className="inventory-item__label">WAREHOUSE:</span>
				<p className="inventory-item__content">{item.warehouseName}</p>
			</div>
		</section>
	);
};

export default InventoryDetails;
