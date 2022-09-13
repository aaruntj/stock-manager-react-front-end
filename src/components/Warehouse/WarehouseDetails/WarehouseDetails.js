import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import "./WarehouseDetails.scss";
import ArrowIcon from "../../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";
import ArrowSort from "../../../assets/icons/sort-24px.svg";
import WarehouseInventory from "../WarehouseInventory/WarehouseInventory";

const API_URL = process.env.REACT_APP_API_URL;

const WarehouseDetails = () => {
	const [warehouse, setWarehouse] = useState(null);
	const { warehouseId } = useParams();

	//------- Fetch warehouse details data ------
	useEffect(() => {
		const getWarehouseDetails = async () => {
			try {
				const response = await axios.get(`${API_URL}/${warehouseId}/inventory`);
				console.log(response);
				const warehouseDetailsData = await response.data.warehouseInventory;
				setWarehouse(warehouseDetailsData);

			} catch (error) {
				console.log(error.message);
			}
		};
		getWarehouseDetails();
	}, [warehouseId]);

	//-------- safe guard ---------
	if (warehouse === null || warehouse === undefined) {
		return <h1>Loading...</h1>;
	}
  console.log (warehouse);

	return (
		<section className="list__section">
			<div className="list__header-container">
				<h1 className="list__title">{warehouse.name}</h1>
				<div className="list__searchBar"></div>
				<button className="list__btn">Edit</button>
			</div>
			<div className="list__container">
				<div className="list__label-container5">
					<div className="list__label-box">
						<span className="list__label ">INVENTORY ITEM</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">CATEGORY</span>
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
						<span className="list__label ">ACTIONS</span>
					</div>
				</div>
        {warehouse.map((warehouse, index) => (
					<WarehouseInventory key={index} warehouse={warehouse} />
				))}
			</div>
		</section>
	);
};

export default WarehouseDetails;
