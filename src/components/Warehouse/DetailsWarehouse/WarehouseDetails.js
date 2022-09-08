import React from 'react'
import './WarehouseDetails.scss'

function WarehouseDetails({warehouseLocation, warehouseAddress, warehouseContact}) {
  let contactName = warehouseContact.name;
  let contactPosition = warehouseContact.position;
  let contactPhone = warehouseContact.phone;
  let contactEmail = warehouseContact.email;

  return (
    <>
      <div className="warehouse-details-section">
        <div className="warehouse-details-section__content">
          <div className="warehouse-details-section__header">
            <div className="warehouse-details-section__icon-and-text">
              <img src={require('../../../assets/icons/arrow_back-24px.svg').default} className="warehouse-details-section__header-icon" alt="" />
              <div className="add-item-section__title"> {warehouseLocation} </div>
            </div>
            <button className='warehouse-details-section__edit-button'>
            <img src={require('../../../assets/icons/edit-24px.svg').default} className="warehouse-details-section__edit-icon" alt="" />
            </button>
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
        </div>
      </div>
    </>
  )
}

export default WarehouseDetails