//add new inventory item

import React from 'react'
import './AddInventory.scss'

function AddInventory() {
  return (
    <>
      <section className="add-item-section">
        <div className="add-item-section__header">
          <img src={require('../../../assets/icons/arrow_back-24px.svg').default} className="add-item-section__header-icon" alt="" />
          <div className="add-item-section__title">Add New Inventory Item</div>
        </div>
        <form className='add-item-form'>
          <div className="details-and-availability">
            <div className="item-details">
              <div className="item-details__subhead">
                Item Details
              </div>
              <label htmlFor="itemName" className='item-details__item-name-label'>Item Name</label>
              <input type="text" name="itemName" className="item-details__item-name-input" placeholder='Item Name' />
              <label htmlFor="itemDesc" className='item-details__item-desc-label'>Description</label>
              <textarea className="item-details__item-description-input" name="itemDesc" placeholder='Please enter a brief item description...'></textarea>
              <label htmlFor="itemCategory" className='item-details__item-category-label'>Category</label>
              <select name="itemCategory" className="item-details__item-category-input">
                <option value="" selected hidden>Please select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="item-availability">
              <div className="item-availability__subhead">
                Item Availability
              </div>
              <label htmlFor="itemStatus" className='item-availability__status-label'>Status</label>
              <div className="item-availability__radio-buttons">
                <div className="item-availability-radio-button">
                  <input type="radio" className="item-status__in-stock" name="item-status" value="in stock" checked />
                  <label htmlFor="item-status">In stock</label>
                </div>
                <div className="item-availability__radio-button">
                  <input type="radio" className="item-status__out-stock" name="item-status" value="Out of stock" />
                  <label htmlFor="item-status">Out of stock</label>
                </div>
              </div>
              <label htmlFor="quantity" className='item-availability__quantity-label'>Quantity</label>
              <input type="text" name="quantity" className="item-availability__quantity-input" placeholder='0' />
              <label htmlFor="itemWarehouse" className='item-availability__warehouse-label'>Warehouse</label>
              <select name="itemWarehouse" className="item-availability__item-warehouse-input">
                <option value="" defaultValue hidden>Please select</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="add-item-section__buttons">
            <button type='button' className='add-item-section__cancel-button'>Cancel</button>
            <button type='button' className='add-item-section__add-button'>
            + Add Item
            </button>
          </div>



        </form>
      </section>
    </>)
}

export default AddInventory