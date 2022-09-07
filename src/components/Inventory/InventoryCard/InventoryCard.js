import "./InventoryCard.scss";

const InventoryCard = ({ item }) => {
	// console.log(item);
	return (
		<div className="card__section">
			<div className="card">
				<div className="card__container">
					<div className="card__box">
						<h4 className="card__label">INVENTORY ITEM</h4>
						<p className="card__item">{item.itemName}</p>
					</div>
					<div className="card__box">
						<h4 className="card__label">CATEGOTY</h4>
						<p className="card__item">{item.category}</p>
					</div>
				</div>

				<div className="card__container">
					<div className="card__box">
						<h4 className="card__label">STATUS</h4>
						<p className="card__status-green">{item.status}</p>
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
				<button className="card_delete-btn"></button>
				<button className="card_edit-btn"></button>
			</div>
		</div>
	);
};

export default InventoryCard;
