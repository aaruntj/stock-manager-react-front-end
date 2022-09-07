import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArrowIcon from "../../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

const API_URL = process.env.REACT_APP_API_URL;

const InventoryDetails = () => {
	const [item, setItem] = useState(null);

	const { itemId } = useParams();
	//------- Fetch item details data ------
	useEffect(() => {
		const getItemDetails = async () => {
			try {
				const response = await axios.get(`${API_URL}/id`);
				console.log(response);
			} catch (error) {
				console.log(error.message);
			}
		};
	});
	return (
		<section className="inventory-item">
			<div className="inventory-item__header">
				<img src={ArrowIcon} alt="" />
				<h1>{}</h1>
				<img src={EditIcon} alt="" />
			</div>
			<div className="inventory-item__details">
				<p className="inventory-item__label">ITEM DESCRIPTION</p>
				<p className="invenroty-item__content">{}</p>
				<p className="inventory-item__label">CATEGORY</p>
				<p className="invenroty-item__content">{}</p>

				<p className="inventory-item__label">STATUS</p>
				<p className="invenroty-item__content">{}</p>

				<p className="inventory-item__label">QUANTITY</p>
				<p className="invenroty-item__content">{}</p>

				<p className="inventory-item__label">WAREHOUSE</p>
				<p className="invenroty-item__content">{}</p>
			</div>
		</section>
	);
};

export default InventoryDetails;
