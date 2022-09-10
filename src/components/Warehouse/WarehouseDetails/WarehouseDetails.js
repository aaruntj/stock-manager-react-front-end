import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./WarehouseDetails.scss";
import ArrowIcon from "../../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";
import WarehouseInventory from "../WarehouseInventory/WarehouseInventory";

const API_URL = process.env.REACT_APP_API_URL;

const WarehouseDetails = () => {
	const [warehouse, setWarehouse] = useState(null);
  console.log(warehouse);
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

	return (
		<section className="warehouse">
			<div className="warehouse__header-container">
				<h1 className="warehouse__header">Warehouses</h1>
				<div className="warehouse__searchBar"></div>
			</div>
			<div className="warehouse__list">
				{warehouse.map((warehouse, index) => (
					<WarehouseInventory key={index} warehouse={warehouse} />
				))}
			</div>
		</section>
	);
};

export default WarehouseDetails;
