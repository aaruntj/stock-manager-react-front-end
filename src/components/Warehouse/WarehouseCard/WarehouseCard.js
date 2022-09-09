import React from 'react'
import { Link } from "react-router-dom";

import "./WarehouseCard.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

function Warehouses({warehouse}) {
  return (
    <div className="card__section">
      <div className="card">
        <div className="card__container">
          <div className="card__box">
            <h4 className="card__label">WAREHOUSE</h4>
            <div className="card__link-container">
              <Link to={`/warehouses/${warehouse.id}`} className="card__link">
                <span className="card__item-link">{warehouse.name}</span>{" "}
                <img src={ArrowIcon} alt="" />
              </Link>
            </div>
          </div>
          <div className="card__box">
            <h4 className="card__label">ADDRESS</h4>
            <p className="card__item">{warehouse.address},{warehouse.city},{warehouse.country}</p>
          </div>
        </div>

        <div className="card__container">
          <div className="card__box">
            <h4 className="card__label">CONTACT NAME</h4>
            <p className="card__item">{warehouse.contact.name}</p>
          </div>
          <div className="card__box">
            <h4 className="card__label">CONTACT INFORMATION</h4>
            <p className="card__item">{warehouse.contact.phone}<br></br>{warehouse.contact.email}</p>
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

export default Warehouses