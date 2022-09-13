import React from 'react'
import { Link } from "react-router-dom";

import "./WarehouseInventory.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

function Warehouses({warehouse, openDeleteModal}) {
	
	// console.log(warehouse)
	return (
		<div className="row__section">
			<div className="row__content5wh">
				<div className="row__container5wh-right">
					<div className="row__box">
						<span className="row__label row__hide">INVENTORY ITEM</span>
						<div className="row__link-container">
							<Link to={`/inventory/${warehouse.id}`} className="row__link">
								<span className="row__item-link">{warehouse.itemName}</span>{" "}
								<img src={ArrowIcon} alt="" />
							</Link>
						</div>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">CATEGORY</span>
						<p className="row__item">{warehouse.category}</p>
					</div>
				</div>
				<div className="row__container5wh-left">
					<div className="row__box">
						<span className="row__label row__hide">STATUS</span>
						<p
							className={`${
								warehouse.status === "In Stock"
									? "row__status-green"
									: "row__status-red"
							}`}
						>
							{warehouse.status.toUpperCase()}
						</p>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">QTY</span>
						<p className="row__item">{warehouse.quantity}</p>
					</div>
				</div>
			</div>
			<div className="row__btn-container">
				<img className="row__btn-icon" src={DeleteIcon} alt="" onClick={() => openDeleteModal(warehouse.id, warehouse.itemName)} />
				<Link to={`/add-or-edit-inventory/${warehouse.id}`} >
				<img className="row__btn-icon" src={EditIcon} alt="" />
				</Link>
			</div>
		</div>
	);
}
export default Warehouses