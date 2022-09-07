const InventoryCard = ({ item }) => {
	return (
		<div className="card">
			<div className="card__container">
				<h4 className="card__label">INVENTORY ITEM</h4>
				<p className="card__item">{item}</p>
			</div>
			<div className="card__container">
				<h4 className="card__label">CATEGOTY</h4>
				<p className="card__item">{item}</p>
			</div>
			<div className="card__container">
				<h4 className="card__label">STATUS</h4>
				<p className="card__item">{item}</p>
			</div>
			<div className="card__container">
				<h4 className="card__label">QTY</h4>
				<p className="card__item">{item}</p>
			</div>
			<div className="card__container">
				<h4 className="card__label">WAREHOUSE</h4>
				<p className="card__item">{item}</p>
			</div>
		</div>
	);
};
