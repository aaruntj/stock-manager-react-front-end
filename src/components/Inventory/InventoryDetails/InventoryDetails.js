import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./InventoryDetails.scss";
import ArrowIcon from "../../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../../assets/icons/edit-white.svg";

const API_URL = process.env.REACT_APP_API_URL;

const InventoryDetails = () => {
	const [item, setItem] = useState(null);

	const { itemId } = useParams();

	//------- Fetch item details data ------
	useEffect(() => {
		const getItemDetails = async () => {
			try {
				const response = await axios.get(`${API_URL}/inventory/${itemId}`);
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
				<div className="inventory-item__title">
					<Link to={"/inventory"} className="inventory-item__link">
						<img className="inventory-item__icon" src={ArrowIcon} alt="" />
					</Link>
					<h1 className="inventory-item__title">{item.itemName}</h1>
				</div>
				<Link to={`/add-or-edit-inventory/${item.id}`}>
					<div className="inventory-item__btn-container">
						<img className="inventory-item__edit-icon" src={EditIcon} alt="" />
						<span className="inventory-item__btn-text">Edit</span>
					</div>
				</Link>
			</div>
			<div className="inventory-item__details">
				<div className="inventory-item__right">
					<div className="inventory-item__box">
						<span className="inventory-item__label">ITEM DESCRIPTION:</span>
						<p className="inventory-item__content">{item.description}</p>
					</div>
					<div className="inventory-item__box">
						<span className="inventory-item__label">CATEGORY:</span>
						<p className="inventory-item__content">{item.category}</p>
					</div>
				</div>

				<div className="inventory-item__left">
					<div className="inventory-item__status-container">
						<div className="inventory-item__box">
							<span className="inventory-item__label">STATUS:</span>
							<p
								className={`${
									item.status === "In Stock"
										? "inventory-item__status-green"
										: "inventory-item__status-red"
								}`}
							>
								{item.status.toUpperCase()}
							</p>
						</div>
						<div className="inventory-item__box">
							<span className="inventory-item__label">QUANTITY:</span>
							<p className="inventory-item__content">{item.quantity}</p>
						</div>
					</div>
					<div className="inventory-item__box">
						<span className="inventory-item__label">WAREHOUSE:</span>
						<p className="inventory-item__content">{item.warehouseName}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InventoryDetails;
