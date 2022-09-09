import React from "react";
import "./EditWarehouse.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";

function EditWarehouse() {
  return (
    <div className="component">
      <div className="component__header">
        <img src={backArrow} alt="Back Arrow" />
        <h1 className="component__title">Edit Warehouse</h1>
      </div>
      <div className="form__container">
        <h2 className="form__subtitle">Warehouse Details</h2>

        <label className="form__label" htmlFor="warehouseName">
          Warehouse Name
        </label>
        <input name="warehouseName" className="form__input" type="text" />

        <label className="form__label" htmlFor="streetAddress">
          Street Address
        </label>
        <input name="streetAddress" className="form__input" type="text" />

        <label className="form__label" htmlFor="city">
          City
        </label>
        <input name="city" className="form__input" type="text" />

        <label className="form__label" htmlFor="country">
          Country
        </label>
        <input name="country" className="form__input" type="text" />
      </div>
      <div className="form__container form__container--contacts">
        <h2 className="form__subtitle">Contact Details</h2>
        <label className="form__label" htmlFor="contactName">
          Contact Name
        </label>
        <input name="contactName" className="form__input" type="text" />

        <label className="form__label" htmlFor="position">
          Position
        </label>
        <input name="position" className="form__input" type="text" />

        <label className="form__label" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input name="phoneNumber" className="form__input" type="text" />

        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input name="email" className="form__input" type="text" />
      </div>{" "}
      <div className="button__container">
        <button className="button button--cancel"> Cancel</button>
        <button className="button button--save"> Save</button>
      </div>
    </div>
  );
}

export default EditWarehouse;
