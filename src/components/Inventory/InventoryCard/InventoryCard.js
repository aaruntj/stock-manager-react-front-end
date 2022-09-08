import { Link } from "react-router-dom";

import "./InventoryCard.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

const InventoryCard = ({ item }) => {
	return (
		<div className="card__section">
			<div className="card">
				<div className="card__container">
					<div className="card__box">
						<span className="card__label card__hide">INVENTORY ITEM</span>
						<div className="card__link-container">
							<Link to={`/inventory/${item.id}`} className="card__link">
								<span className="card__item-link">{item.itemName}</span>{" "}
								<img src={ArrowIcon} alt="" />
							</Link>
						</div>
					</div>
					<div className="card__box">
						<span className="card__label card__hide">CATEGOTY</span>
						<p className="card__item">{item.category}</p>
					</div>
				</div>

				<div className="card__container">
					<div className="card__box">
						<span className="card__label card__hide">STATUS</span>
						<p
							className={`${
								item.status === "In Stock"
									? "card__status-green"
									: "card__status-red"
							}`}
						>
							{item.status.toUpperCase()}
						</p>
					</div>
					<div className="card__box">
						<span className="card__label card__hide">QTY</span>
						<p className="card__item">{item.quantity}</p>
					</div>
					<div className="card__box">
						<span className="card__label card__hide">WAREHOUSE</span>
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
