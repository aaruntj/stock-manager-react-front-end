import { Link } from "react-router-dom";

import "./InventoryCard.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

const InventoryCard = ({ item }) => {
	console.log(item);
	return (
		<div className="card__section">
			<div className="card">
				<div className="card__container">
					<div className="card__box">
						<h4 className="card__label">INVENTORY ITEM</h4>
						<div className="card__link-container">
							<Link to={`/inventory/${item.id}`} className="card__link">
								<span className="card__item-link">{item.itemName}</span>{" "}
								<img src={ArrowIcon} alt="" />
							</Link>
						</div>
					</div>
					<div className="card__box">
						<h4 className="card__label">CATEGOTY</h4>
						<p className="card__item">{item.category}</p>
					</div>
				</div>

				<div className="card__container">
					<div className="card__box">
						<h4 className="card__label">STATUS</h4>
						<p className={`${item.status === "In Stock" ? "green" : "orange"}`}>
							{item.status.toUpperCase()}
						</p>
					</div>
					<div className="card__box">
						<h4 className="card__label">QTY</h4>
						<p className="card__item">{item.quantity}</p>
					</div>
					<div className="card__box">
						<h4 className="card__label">WAREHOUSE</h4>
						<p className="card__item">{item.warehouseName}</p>
					</div>
				</div>
			</div>
			<div className="card__btn-container">
				<img src={DeleteIcon} alt="" />
				<img src={EditIcon} alt="" />
			</div>
		</div>
	);
};

export default InventoryCard;
