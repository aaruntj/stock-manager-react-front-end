import React from 'react'
import { Link } from "react-router-dom";

import "./WarehouseInventory.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

function Warehouses({warehouse}) {
  const isStatusGreen = () =>{
    if (warehouse.status.toUpperCase() === "OUT OF STOCK"){
      return false
    }
    else return true
  }
  console.log(warehouse.status)
  console.log(isStatusGreen(warehouse.status))

	return (
		<div className="warehouse__card__section">
			<div className="warehouse__card">
				<div className="warehouse__card__container">
					<div className="warehouse__card__box">
						<h4 className="warehouse__card__label">INVENTORY ITEM</h4>
						<div className="warehouse__card__link-container">
							<Link to={`/inventory/${warehouse.id}`} className="warehouse__card__link">
								<span className="warehouse__card__item-link">{warehouse.itemName}</span>{" "}
								<img src={ArrowIcon} alt="" />
							</Link>
						</div>
					</div>
					<div className="warehouse__card__box">
						<h4 className="warehouse__card__label">CATEGORY</h4>
						<p className="warehouse__card__item">{warehouse.category}</p>
					</div>
				</div>

				<div className="warehouse__card__container">
					<div className="warehouse__card__box">
						<h4 className="warehouse__card__label">STATUS</h4>
						<p className={`${isStatusGreen(warehouse.status)?"warehouse__card__status-green": "warehouse__card__status-orange"}`}>{warehouse.status.toUpperCase()}</p>
					</div>
					<div className="warehouse__card__box">
						<h4 className="warehouse__card__label">QTY</h4>
						<p className="warehouse__card__item">{warehouse.quantity}</p>
					</div>
				</div>
			</div>
			<div className="warehouse__card__btn-container">
				<img src={DeleteIcon} alt="" />
				<img src={EditIcon} alt="" />
			</div>
		</div>
	);
}
export default Warehouses