import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Model';
import WarehouseInventoryListItem from '../../WarehouseInventoryListItem/WarehouseInventoryListItem';
import './WarehouseDetails.scss'

let testArray = [
  {
    "id": "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
    "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
    "warehouseName": "Manhattan",
    "itemName": "Television",
    "description": "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
    "category": "Electronics",
    "status": "In Stock",
    "quantity": 500
  },
  {
    "id": "83433026-ca32-4c6d-bd86-a39ee8b7303e",
    "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
    "warehouseName": "Manhattan",
    "itemName": "Gym Bag",
    "description": "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
    "category": "Gear",
    "status": "Out of Stock",
    "quantity": 0
  },
  {
    "id": "a193a6a7-42ab-4182-97dc-555ee85e7486",
    "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
    "warehouseName": "Manhattan",
    "itemName": "Hoodie",
    "description": "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
    "category": "Apparel",
    "status": "Out of Stock",
    "quantity": 0
  },
]


function WarehouseDetails({ warehouseLocation, warehouseAddress, warehouseContact }) {
  let contactName = warehouseContact.name;
  let contactPosition = warehouseContact.position;
  let contactPhone = warehouseContact.phone;
  let contactEmail = warehouseContact.email;
  let filteredArray = testArray.filter(e => e.warehouseName === "Manhattan")
  console.log(filteredArray)

  let [showDeleteModal, setshowDeleteModal] = useState(false)
  let [deleteItemName, setdeleteItemName] = useState("")
  let [deleteItemId, setdeleteItemId] = useState("")


  return (
    <>
      <Modal
        showModal={showDeleteModal}
        setShowModal={setshowDeleteModal}
        modalTitle={`Delete ${deleteItemName} inventory item?`}
        modalContent={`Please confirm that you’d like to delete ${deleteItemName} from the inventory list.
You won’t be able to undo this action.`}
        endpointUrl="NEED TO FINISH"
      />
      <div className="warehouse-details-section">
        <div className="warehouse-details-section__content">
          <div className="warehouse-details-section__header">
            <div className="warehouse-details-section__icon-and-text">
              <Link to="/warehouses">
                <img src={require('../../../assets/icons/arrow_back-24px.svg').default} className="warehouse-details-section__header-icon" alt="" />
              </Link>
              <div className="add-item-section__title"> {warehouseLocation} </div>
            </div>
            {/* NEED EDIT WAREHOUSE PAGE */}
            {/* <Link to="/"> */}
            <button className='warehouse-details-section__edit-button'>
              <img src={require('../../../assets/icons/edit-24px.svg').default} className="warehouse-details-section__edit-icon" alt="" />
            </button>
            {/* </Link> */}
          </div>
          <div className="warehouse-details-section__contact-info">
            <div className="warehouse-details-section__address-block">
              <div className="warehouse-details-section__address-label">
                WAREHOUSE ADDRESS:
              </div>
              <div className="warehouse-details-section__address-text">
                {warehouseAddress}
              </div>
            </div>
            <div className="warehouse-details-section__name-and-contact">
              <div className="warehouse-details-section__name-block">
                <div className="warehouse-details-section__name-label">
                  CONTACT NAME:
                </div>
                <div className="warehouse-details-section__name-text">
                  {contactName}
                  <br />
                  {contactPosition}
                </div>
              </div>
              <div className="warehouse-details-section__info-block">
                <div className="warehouse-details-section__info-label">
                  CONTACT INFORMATION:
                </div>
                <div className="warehouse-details-section__info-text">
                  {contactPhone} <br />
                  {contactEmail}
                </div>
              </div>
            </div>
          </div>
          {filteredArray.map((passedObj, i) => {
            return <WarehouseInventoryListItem
              warehouseInventoryObj={filteredArray[i]}
              key={i}
              showModal={showDeleteModal}
              setShowModal={setshowDeleteModal}
              setdeleteItemName={setdeleteItemName}
              setdeleteItemId={setdeleteItemId}
            />
          })}
        </div>
      </div>
    </>
  )
}

export default WarehouseDetails