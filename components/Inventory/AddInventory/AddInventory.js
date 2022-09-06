//add new inventory item

import React from 'react'

function AddInventory() {
    return (
        <>
            <section className="add-item-section">
                <div className="add-item-section__header">
                    <img src="../../../assets/icons/arrow_back-24px.svg" alt="" />
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
                            <textarea className="item-details__item-description-input" name="itemDesc" placeholder='Please enter a brief item description'></textarea>
                            <label htmlFor="itemCategory" className='item-details__item-category-label'>Category</label>
                            <select name="itemCategory" id="item-details__item-category-input">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="item-availability">
                            <div className="item-availability__subhead">
                                Item Details
                            </div>
                            <label htmlFor="itemStatus" className='item-availability-status-label'>Category</label>
                            <div className="item-availability__radio-buttons">
                                <div className="item-availability-radio-button">
                                    <input type="radio" id="item-status__in-stock" name="item-status" value="in stock" />
                                    <label for="item-status">In stock</label>
                                </div>
                                <div className="item-availability-radio-button">
                                    <input type="radio" id="item-status__out-stock" name="item-status" value="Out of stock" />
                                    <label for="item-status">Out of stock</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>AddInventory</div>

                    <div className="upload-video-section__inputs">
                    </div>
                </form>
            </section>
        </>)
}

export default AddInventory