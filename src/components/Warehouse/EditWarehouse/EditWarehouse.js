import React from "react";
import { useState } from "react";
import "./EditWarehouse.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";

function EditWarehouse() {
  const warehouse = {
    id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    name: "Washington",
    address: "33 Pearl Street SW",
    city: "Washington",
    country: "USA",
    contact: {
      name: "Greame Lyon",
      position: "Warehouse Manager",
      phone: "+1 (646) 123-1234",
      email: "glyon@instock.com",
    },
  };
  const [warehouseName, setWarehouseName] = useState(warehouse.name);
  const [address, setAddress] = useState(warehouse.address);
  const [city, setCity] = useState(warehouse.city);
  const [country, setCountry] = useState(warehouse.country);
  const [contactName, setContactName] = useState(warehouse.contact.name);
  const [position, setPosition] = useState(warehouse.contact.position);
  const [phoneNumber, setPhoneNumber] = useState(warehouse.contact.phone);
  const [email, setEmail] = useState(warehouse.contact.email);

  return (
    <div className="component">
      <div className="component__header">
        <img src={backArrow} alt="Back Arrow" />
        <h1 className="component__title">Edit Warehouse</h1>
      </div>
      <form className="form">
        <div className="form__container">
          <h2 className="form__subtitle">Warehouse Details</h2>
          <label className="form__label" htmlFor="warehouseName">
            Warehouse Name
            <input
              name="warehouseName"
              className="form__input form__input--not-valid"
              type="text"
              value={warehouseName}
            />
            <div className="error-message">
              <img className="error-message__img" src={error} />
              <p className="error-message__text">This field is required</p>
            </div>
          </label>
          <label className="form__label" htmlFor="streetAddress">
            Street Address
            <input
              name="streetAddress"
              className="form__input"
              type="text"
              value={address}
            />
          </label>
          <label className="form__label" htmlFor="city">
            City
            <input
              name="city"
              className="form__input "
              type="text"
              value={city}
            />
          </label>
          <label className="form__label" htmlFor="country">
            Country
            <input
              name="country"
              className="form__input"
              type="text"
              value={country}
            />
          </label>
        </div>
        <div className="form__container form__container--contacts">
          <h2 className="form__subtitle">Contact Details</h2>
          <label className="form__label" htmlFor="contactName">
            Contact Name
            <input
              name="contactName"
              className="form__input"
              type="text"
              value={contactName}
            />
          </label>
          <label className="form__label" htmlFor="position">
            Position
            <input
              name="position"
              className="form__input"
              type="text"
              value={position}
            />
          </label>
          <label className="form__label" htmlFor="phoneNumber">
            Phone Number
            <input
              name="phoneNumber"
              className="form__input"
              type="text"
              value={phoneNumber}
            />
          </label>
          <label className="form__label" htmlFor="email">
            Email
            <input
              name="email"
              className="form__input"
              type="text"
              value={email}
            />
          </label>
        </div>
      </form>
      <div className="button__container">
        <button className="button button--cancel"> Cancel</button>
        <button className="button button--save"> Save</button>
      </div>
    </div>
  );
}

export default EditWarehouse;
